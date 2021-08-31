// You can edit this! 😱

const Comments = ({ postId }) => {
  const { comments, addComment, count, loading } = useComments(
    'https://use-comments.hasura.app/v1/graphql',
    postId
  );

  return (
    <section>
      <AddComment onSubmit={addComment} />
      <h3>{count} comments</h3>
      {loading ? (
        <Spinner />
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

render(<Comments postId="landing-page" />);
