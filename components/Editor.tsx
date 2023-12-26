"use client";

import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
} from "@blocknote/react"
import "@blocknote/core/style.css"

interface EditorProps {
  onChange: (value: string) => void
  initialContent?: string
  editable?: boolean
}
const Editor = ({
  onChange,
  initialContent,
  editable,
}: EditorProps) => {
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent:
      initialContent
        ? JSON.parse(initialContent)
        : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
    }
  })

  return (
    <>
      <div className="">
        <BlockNoteView
          editor={editor}

        />
      </div>
    </>
  );

}

export default Editor;