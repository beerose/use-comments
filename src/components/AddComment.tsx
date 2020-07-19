import React, { useState } from 'react';

import {
  Box,
  Button,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Flex,
  Divider,
  Checkbox,
  Slider,
} from 'theme-ui';

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
        mb={3}
        placeholder="Jon Doe"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Label htmlFor="comment">Comment</Label>
      <Textarea
        name="comment"
        id="comment"
        rows="2"
        mb={3}
        fontFamily="body"
        placeholder="Tell me what you think 😊"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <Button mb={3} type="submit" sx={{ cursor: 'pointer' }}>
        Add comment
      </Button>
      <Divider />
    </Box>
  );
};
