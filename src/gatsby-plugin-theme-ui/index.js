import { deep } from "@theme-ui/presets"
import syntaxTheme from "@theme-ui/prism/presets/theme-ui"

export default {
  ...deep,
  styles: {
    ...deep.styles,
    code: {
      ...syntaxTheme,
    },
  },
}
