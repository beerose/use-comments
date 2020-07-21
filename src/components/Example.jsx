// You can edit this! 😱

const Comments = ({ postId }) => {
  const {
    comments,
    addComment,
  } = useComments(
    'https://aleksandra-codes-comments.herokuapp.com/v1/graphql',
    postId,
    { limit: 5 }
  );

  return (
    <section>
      <AddComment onSubmit={addComment} />
      <h3>{comments.length} comments</h3>
      <div>
        {comments.map(({ id, author, content, created_at, status }) => (
          <article key={id}>
            <div>
              {author}
              {' ・ '}
              <time dateTime={created_at}>{formatDate(created_at)}</time>
              {status && ` ・ ${formatStatus(status)}`}
            </div>
            <p>{content}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

render(<Comments postId="1" />);
