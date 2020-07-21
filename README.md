# useComments

React hook to effortlessly add a comment section to your website, and start the discussion on your content.

```jsx
const Comments = ({ postId }) => {
  const { comments, addComment, count, loading } = useComments(
    'https://<YOUR_HASURA_APP>.herokuapp.com/v1/graphql',
    postId
  );

  return (
    <section>
      <AddComment onSubmit={addComment} />
      <h3>{count} comments</h3>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          {comments.map(({ author, content, created_at, status }) => (
            <article key={created_at}>
              <div>
                {`${author} ・ `}
                <time dateTime={created_at}>{formatDate(created_at)}</time>
                {status && ` ・ ${formatStatus(status)}`}
              </div>
              <p>{content}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
```

## Add comments in five steps
