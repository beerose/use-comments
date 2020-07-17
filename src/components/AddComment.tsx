import * as React from 'react';

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
  return (
    <Box as="form" onSubmit={e => e.preventDefault()}>
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} placeholder="Jon Doe" />
      <Label htmlFor="comment">Comment</Label>
      <Textarea
        name="comment"
        id="comment"
        rows="2"
        mb={3}
        fontFamily="body"
        placeholder="Tell me what you think 😊"
      />
      <Button mb={3}>Add comment</Button>
      <Divider />
    </Box>
  );
};
