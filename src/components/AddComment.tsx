import React, { useState } from 'react';

import { Box, Button, Label, Input, Textarea, Divider } from 'theme-ui';

import { useComments, Comment } from '../useComments';

export interface AddCommentProps {
  onSubmit: (comment: Pick<Comment, 'author' | 'content'>) => void;
}
export const AddComment = ({ onSubmit }: AddCommentProps) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  return (
    <Box
      as="form"
      onSubmit={e => {
        console.log({ e });
        e.preventDefault();
        onSubmit({ content: comment, author: username });
      }}
    >
      <Label htmlFor="username">Username</Label>
      <Input
        name="username"
        id="username"
        placeholder="Jon Doe"
        value={username}
        onChange={e => setUsername(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Label htmlFor="comment">Comment</Label>
      <Textarea
        name="comment"
        id="comment"
        rows={2}
        placeholder="Tell me what you think 😊"
        value={comment}
        onChange={e => setComment(e.target.value)}
        sx={{ mb: 3, fontFamily: 'body' }}
      />
      <Button type="submit" sx={{ mb: 3 }}>
        Add comment
      </Button>
      <Divider />
    </Box>
  );
};
