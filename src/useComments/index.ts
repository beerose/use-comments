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
  comments(where: {post: {_eq: $postId}}, limit: $limit, offset: $offset) {
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
  hasuraUrl: string;
  postId: string;
  limit?: number;
  offset?: number;
}
export const useComments = ({
  hasuraUrl,
  limit,
  offset = 0,
  postId,
}: UseCommentsConfig) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<UseCommentsError | null>(null);

  useEffect(() => {
    fetch(hasuraUrl, {
      method: 'POST',
      headers: {
        'x-hasura-role': 'user',
      },
      body: JSON.stringify({
        query: getCommentsQuery,
        variables: {
          postId,
          ...(limit && { limit }),
          ...(offset && { offset }),
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        if (res.errors && res.errors.length) {
          setError({
            error: errorMessage,
            details: res.errors[0].message,
          });
          return;
        }
        setComments(res.data.comments);
      })
      .catch((err) => {
        setError({
          error: errorMessage,
          details: err,
        });
      });
  }, []);

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
      .then((res) => res.json())
      .then((data) => {
        if (data.errors && data.errors.length) {
          setError({
            error: errorMessage,
            details: data.errors[0].message,
          });
          return;
        }
        console.log({ data });
      })
      .catch((err) => {
        setError({
          error: errorMessage,
          details: err,
        });
      });
  };

  const refetch = () => {};

  return { comments, addComment, refetch, error };
};
