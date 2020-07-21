import { useState, useEffect } from 'react';

export interface Comment {
  /** The string provided by the sender */
  author: string;
  content: string;
  created_at: string;
  /**
   * Needed for optimistic update.
   * When the comment is submitted, it is `'sending'`.
   * When the request succeeds and the comment is not hidden in the database, it turns into `'added'`.
   * When the request succeeds and the comment is hidden and awaiting approval, we receive `'delivered-awaiting-approval'`.
   * When the request fails, the status is `'failed'`. - You can use this information to prompt user to retry.
   */
  status?: CommentStatus;
}

interface CommentInternal extends Comment {
  post_id: string;
}

/**
 * Needed for optimistic update.
 * When the comment is submitted, it is `'sending'`.
 * When the request succeeds and the comment is not hidden in the database, it turns into `'added'`.
 * When the request succeeds and the comment is hidden and awaiting approval, we receive `'delivered-awaiting-approval'`.
 * When the request fails, the status is `'failed'`. - You can use this information to prompt user to retry.
 */
export type CommentStatus =
  | 'sending'
  | 'added'
  | 'delivered-awaiting-approval'
  | 'failed';

const getCommentsQuery = `
query GetComments($postId: String!, $limit: Int, $offset: Int) {
  comments(where: {post_id: {_eq: $postId}}, limit: $limit, offset: $offset, order_by: {created_at: desc}) {
    post_id
    author
    content
    created_at
  }
  comments_aggregate(where: {post_id: {_eq: $postId}}) {
    aggregate {
      count
    }
  }
}
`;

const addNewCommentMutation = `
mutation AddNewComment($postId: String!, $author: String!, $content: String!) {
  insert_comments_one(object: {author: $author, content: $content, post_id: $postId}) {
    post_id
    author
    content
    created_at
    hidden
  }
}
`;

const errorMessage =
  'Oops! Fetching comments was unsuccessful. Try again later.';

export interface UseCommentsError {
  error: string;
  details: string;
}

export interface UseCommentsConfig {
  limit?: number;
  offset?: number;
}

export interface UseComentsResult {
  comments: Comment[];
  addComment: ({
    content,
    author,
  }: Pick<Comment, 'content' | 'author'>) => void;
  refetch: () => void;
  count: number;
  loading: boolean;
  error: UseCommentsError | null;
}

/**
 * Fetches comments from Hasura backend specified in `hasuraUrl` on mount and whenever
 * `config.limit` or `config.offset` change.
 *
 * @param hasuraUrl URL of the Hasura instance
 * @param postId Comments will be fetched for the post with id `postId`
 * @param config Configurable offset and limit for the GraphQL query to Hasura
 * @returns comments for giben post, aggregated count of all comments, error,
 *          loading state and a function to refetch data from backend.
 */
export const useComments = (
  hasuraUrl: string,
  postId: string,
  config?: UseCommentsConfig
): UseComentsResult => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState<UseCommentsError | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchComments = () => {
    setLoading(true);
    fetch(hasuraUrl, {
      method: 'POST',
      headers: {
        'x-hasura-role': 'anonymous',
      },
      body: JSON.stringify({
        query: getCommentsQuery,
        variables: {
          postId,
          ...(config?.limit && { limit: config.limit }),
          ...(config?.offset && { offset: config.offset }),
        },
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors && res.errors.length) {
          setError({
            error: errorMessage,
            details: res.errors[0].message,
          });
          setLoading(false);
          return;
        }
        setComments(res.data.comments);
        setCount(res.data.comments_aggregate.aggregate.count);
        setLoading(false);
      })
      .catch(err => {
        setError({
          error: errorMessage,
          details: err,
        });
        setLoading(false);
      });
  };

  useEffect(fetchComments, [config?.limit, config?.offset]);

  const addComment = ({
    content,
    author,
  }: Pick<Comment, 'content' | 'author'>) => {
    const createdAt = new Date().toDateString();

    const newComment: CommentInternal = {
      author,
      content,
      post_id: postId,
      created_at: createdAt,
      status: 'sending',
    };
    setComments(prev => [newComment, ...prev]);
    setCount(prev => prev++);

    fetch(hasuraUrl, {
      method: 'POST',
      headers: {
        'x-hasura-role': 'user',
      },
      body: JSON.stringify({
        query: addNewCommentMutation,
        variables: {
          postId,
          content,
          author,
        },
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors && res.errors.length) {
          setError({
            error: errorMessage,
            details: res.errors[0].message,
          });
          return;
        }
        const remoteComment = res.data.insert_comments_one;
        setComments(prev =>
          prev.map(
            (x): Comment =>
              x === newComment
                ? {
                    ...remoteComment,
                    status: remoteComment.hidden
                      ? 'delivered-awaiting-approval'
                      : 'added',
                  }
                : x
          )
        );
      })
      .catch(err => {
        setError({
          error: errorMessage,
          details: err,
        });
        setComments(prev =>
          prev.map(
            (x): Comment =>
              x === newComment
                ? {
                    ...newComment,
                    status: 'failed',
                  }
                : x
          )
        );
      });
  };

  return {
    comments,
    addComment,
    refetch: fetchComments,
    count,
    loading,
    error,
  };
};
