import { QuartzTransformerPlugin } from "../types"
import { u } from "unist-builder"

export const NotInSd: QuartzTransformerPlugin<Partial<{}>> = (userOpts) => {
  return {
    name: "FrontMatter",
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            if (
              !file.data.frontmatter ||
              !file.data.frontmatter?.tags ||
              !file.data.frontmatter?.tags?.length
            ) {
              return
            }

            if (!file.data.frontmatter.tags?.includes("notinsd")) {
              return
            }

            // Add a callout at the top of the page, to indicate that the
            // note is not in the study design.
            const element = u("blockquote", [
              u("paragraph", [u("text", "[!warning]")]),
              u("paragraph", [u("text", "This note is not in the study design.")]),
              u("paragraph", [
                u("text", "It may contain information that is not relevant to the exam."),
              ]),
            ])
            tree.children.unshift(element)
          }
        },
      ]
    },
  }
}
