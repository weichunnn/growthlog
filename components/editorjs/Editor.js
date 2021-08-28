import EditorJs from 'react-editor-js';
import EDITOR_JS_TOOLS from './tools';
import DragDrop from 'editorjs-drag-drop';
import Undo from 'editorjs-undo';

export default function Editor({ readOnly, ...props }) {
  return (
    <EditorJs
      onReady={(editor) => {
        // workaround for enabling on react-component
        let temp = document.getElementById(editor.configuration.holder);
        editor.configuration.holder = temp;
        new Undo({ editor });
        new DragDrop(editor);
      }}
      tools={EDITOR_JS_TOOLS}
      autofocus={false}
      placeholder="What is going on today?"
      logLevel="ERROR"
      readOnly={readOnly}
      inlineToolbar={true}
      {...props}
    />
  );
}
