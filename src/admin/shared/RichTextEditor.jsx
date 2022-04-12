import { Editor, EditorState } from 'draft-js'
import React, { useState } from 'react'

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  return <Editor editorState={editorState} onChange={setEditorState} />
}

export default RichTextEditor