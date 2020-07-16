/** @jsx jsx */
import { jsx, Styled as s } from "theme-ui"

import example from "!!raw-loader!../components/Comments.tsx"
import { Comments } from "../components/Comments"
import Prism from "@theme-ui/prism"

export default function IndexPage() {
  return (
    <div>
      <Comments postId="example" />
      <Prism className="language-ts">{example}</Prism>
    </div>
  )
}
