// You can edit this! 😱

const Comments = ({ postId }) => {
  const {
    comments,
    addComment,
    refetch,
    error,
  } = useComments(
    'https://aleksandra-codes-comments.herokuapp.com/v1/graphql',
    postId,
    { limit: 5 }
  );

  comments.push({
    id: 'test',
    author: 'The Biggest Fan',
    content: 'Nice lib!',
    created_at: new Date(),
  });

  return (
    <section>
      <AddComment onSubmit={addComment} />
      <h3>{comments.length} comments</h3>
      <div>
        {comments.map(({ id, author, content, created_at }) => (
          <article key={id}>
            <div>
              {author} {' ・ '}
              <time dateTime={created_at}>{formatDate(created_at)}</time>
            </div>
            <p>{content}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

render(<Comments postId="1" />);