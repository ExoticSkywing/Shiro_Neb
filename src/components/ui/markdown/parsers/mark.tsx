import React from 'react'
import {
  parseCaptureInline,
  Priority,
  simpleInlineRegex,
} from 'markdown-to-jsx'
import type { MarkdownToJSX } from 'markdown-to-jsx'

//  ==Mark==
export const MarkRule: MarkdownToJSX.Rule = {
  match: simpleInlineRegex(/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/),
  order: Priority.LOW,
  parse: parseCaptureInline,
  react(node, output, state?) {
    return (
      <mark
        key={state?.key}
        className="rounded-md bg-always-yellow-400 bg-opacity-80 px-1 text-black"
      >
        {output(node.content, state!)}
      </mark>
    )
  },
}
