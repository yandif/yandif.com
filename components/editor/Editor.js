import React from "react";
import {
  defaultValueCtx,
  Editor,
  editorViewOptionsCtx,
  rootCtx,
} from "@milkdown/core";
import { ReactEditor, useEditor } from "@milkdown/react";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { gfm } from "@milkdown/preset-gfm";
import { history } from "@milkdown/plugin-history";
import { prism } from "@milkdown/plugin-prism";
import { tooltip } from "@milkdown/plugin-tooltip";
import { slash } from "@milkdown/plugin-slash";
import { cursor } from "@milkdown/plugin-cursor";

import "@milkdown/theme-nord/lib/theme.css";
import "@milkdown/preset-gfm/lib/style.css";
import "@milkdown/plugin-table/lib/style.css";
import "@milkdown/plugin-tooltip/lib/style.css";
import "@milkdown/plugin-slash/lib/style.css";
import "@milkdown/plugin-cursor/lib/style.css";

export const MilkdownEditor = ({ content, readOnly, onChange }) => {
  const editor = useEditor(
    (root) => {
      const editor = new Editor()
        .config((ctx) => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, content);
          ctx.set(editorViewOptionsCtx, { editable: () => !readOnly });
          ctx.set(listenerCtx, { markdown: onChange ? [onChange] : [] });
        })
        .use(gfm)
        .use(listener)
        .use(history)
        .use(cursor())
        .use(prism)
        .use(tooltip)

      if (!readOnly) {
        editor.use(slash);
      }
      return editor;
    },
    [readOnly, content]
  );

  return (
    <div className={className.editor}>
      <ReactEditor editor={editor} />
    </div>
  );
};