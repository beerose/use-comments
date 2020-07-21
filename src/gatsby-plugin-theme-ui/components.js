/** @jsx jsx */

import { jsx, Styled } from 'theme-ui';
import Prism from '@theme-ui/prism';
import { useState } from 'react';

const withId = Component => props => {
  const id = String(props.children).toLowerCase().replace(' ', '-');
  return <Component id={id} {...props} />;
};

// https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/copy-to-clipboard.js
// https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/

export const copyToClipboard = str => {
  const clipboard = window.navigator.clipboard;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, true);
    textarea.setAttribute(`contenteditable`, true);
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.appendChild(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    document.body.removeChild(textarea);

    return Promise.resolve();
  }

  return clipboard.writeText(str);
};

export default {
  pre: props => props.children,
  code: props => {
    const [copied, setCopied] = useState(false);

    return (
      <div sx={{ position: 'relative', width: '90ch' }}>
        <button
          sx={{
            appearance: 'none',
            position: 'absolute',
            top: 0,
            right: 0,
            bg: 'transparent',
            border: 'none',
            color: 'white', // assumes dark background syntax theme
            p: 2,
            cursor: 'copy',
            opacity: 0.7,
            borderRadius: 'small',
            fontSize: '0.8em',
            ':focus, :hover': {
              bg: 'rgba(255, 255, 255, 0.1)',
              opacity: 1,
              outline: 'none',
            },
          }}
          onClick={() => {
            const text = String(props.children);
            setCopied(true);
            copyToClipboard(text).then(() => {
              window.setTimeout(() => {
                setCopied(false);
              }, 1500);
            });
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <Prism {...props} />
      </div>
    );
  },
  h1: withId(Styled.h1),
  h2: withId(Styled.h2),
  h3: withId(Styled.h3),
};
