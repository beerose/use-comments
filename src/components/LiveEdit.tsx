import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import React from 'react';
import styled from '@emotion/styled';
import { css } from 'theme-ui';
import { useComments } from '../useComments';
import { AddComment } from './AddComment';

export const reactLiveHome = {
  plain: {
    color: '#e7d2ed',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'hsl(30, 20%, 50%)',
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: { color: '#f677e1' },
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
      style: {
        color: 'hsl(75, 70%, 70%)',
      },
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css',
      ],
      style: {
        color: 'hsl(40, 90%, 70%)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#f677e1',
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: '0.7',
      },
    },
  ],
};

const red = '#ff5555';

const StyledProvider = styled(LiveProvider)`
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const LiveWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 50%;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: #021727;
  color: white;
  font-family: 'Source Code Pro', monospace;
  font-size: 1.1em;
  height: 715px;
  padding: 10px;
  margin-left: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 30px;
    height: 300px;
  }
  overflow: auto;
  border-radius: 10px;
  ${column};
  * > textarea:focus {
    outline: none;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  background: transparent;
  max-height: 715px;
  overflow: hidden;
  display: flex;
  padding-right: 20px;
  @media (max-width: 600px) {
    padding-right: 0;
    padding-bottom: 20px;
    max-height: inherit;
  }
  *:focus {
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colors?.primary};
    border-color: ${({ theme }) => theme.colors?.primary};
  }
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: 8px;
  background: ${red};
  color: black;
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
  height: 80px;
  overflow: scroll;
`;

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years ago';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months ago';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days ago';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours ago';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};

const scope = { useComments, formatDate, AddComment };

export const LiveEdit = ({ code }: { code: string }) => (
  <StyledProvider
    code={code}
    noInline={true}
    theme={reactLiveHome as any}
    scope={scope}
  >
    <LiveWrapper>
      <StyledPreview />
      <StyledEditor>
        <LiveEditor />
      </StyledEditor>
    </LiveWrapper>
    <div>
      <StyledError />
    </div>
  </StyledProvider>
);
