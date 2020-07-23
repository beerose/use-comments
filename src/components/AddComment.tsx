/** @jsx jsx */
import { useState } from 'react';

import {
  Box,
  Button,
  Label,
  Input,
  Textarea,
  Divider,
  jsx,
  Message,
} from 'theme-ui';

import { Comment } from '../useComments';

export interface AddCommentProps {
  onSubmit: (comment: Pick<Comment, 'author' | 'content'>) => void;
}
export const AddComment = ({ onSubmit }: AddCommentProps) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [added, setAdded] = useState(false);

  return (
    <Box
      as="form"
      onSubmit={e => {
        console.log({ e });
        e.preventDefault();
        onSubmit({ content: comment, author: username });
        setAdded(true);
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
      {added && (
        <Message
          variant="primary"
          sx={{
            fontSize: '0.8em',
          }}
        >
          Thanks for your comment! 😊 Your comment status is{' '}
          <i>waiting for approval</i>. Comments on this website need to be
          approved before they are visible to others.
        </Message>
      )}
      <Divider />
    </Box>
  );
};
