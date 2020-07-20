import { useState, useEffect } from 'react';

export interface Comment {
  id: number;
  post: string;
  author: string;
  content: string;
  created_at: string;
  parent_comment: number;
}

const getCommentsQuery = `
query GetComments($postId: String!, $limit: Int, $offset: Int) {
  comments(where: {post: {_eq: $postId}}, limit: $limit, offset: $offset, order_by: {created_at: desc}) {
    id
    content
    created_at
    parent_comment
    post
    author
  }
}
`;

const addNewCommentMutation = `
mutation AddNewComment($postId: String!, $author: String!, $content: String!) {
  insert_comments_one(object: {author: $author, content: $content, post: $postId}) {
    id
    content
    author
    created_at
    post
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
  const [error, setError] = useState<UseCommentsError | null>(null);

  const fetchComments = () => {
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
          return;
        }
        setComments(res.data.comments);
      })
      .catch(err => {
        setError({
          error: errorMessage,
          details: err,
        });
      });
  };

  useEffect(fetchComments, []);

  // TODO: 'sending' | 'delivered-and-visible' | 'delivered-and-waiting' visual state
  // TODO: Optimistic update
  const addComment = ({
    content,
    author,
  }: Pick<Comment, 'content' | 'author'>) => {
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
        setComments(prev =>
          res.data.insert_comments_one
            ? [res.data.insert_comments_one, ...prev]
            : prev
        );
      })
      .catch(err => {
        setError({
          error: errorMessage,
          details: err,
        });
      });
  };

  console.log({ comments });

  return { comments, addComment, refetch: fetchComments, error };
};
