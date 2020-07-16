import * as React from "react"

import { useComments } from "../useComments"

export const Comments = (props: { postId: string }) => {
  const { comments, addComment, refetch, error } = useComments({
    hasuraUrl: "https://aleksandra-codes-comments.herokuapp.com/v1/graphql",
    postId: "1", //props.postId, // I think this should be a positional argument
  })

  return (
    <section>
      {comments.map(comment => (
        <article key={comment.id}>
          <div>
            {comment.author}
            {" ・ "}
            <time dateTime={comment.created_at}>{comment.created_at}</time>
          </div>
          <p>{comment.content}</p>
        </article>
      ))}
    </section>
  )
}
