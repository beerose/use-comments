import { useState, useEffect } from 'react';

export interface Comment {
  post_id: string;
  author: string;
  content: string;
  created_at: string;
  status?: CommentStatus;
}

// newly added comments
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
export const useComments = (
  hasuraUrl: string,
  postId: string,
  config?: UseCommentsConfig
) => {
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

  useEffect(fetchComments, []);

  const addComment = ({
    content,
    author,
  }: Pick<Comment, 'content' | 'author'>) => {
    const createdAt = new Date().toDateString();

    const newComment: Comment = {
      author,
      content,
      post_id: postId,
      created_at: createdAt,
      status: 'sending',
    };
    setComments(prev => [newComment, ...prev]);

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
