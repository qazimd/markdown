import React from 'react';

function Editor({ value, onChange }) {
  return (
    <div className="editor">
      <h2>Markdown Input</h2>
      <textarea
        onChange={onChange}
        placeholder="Enter Markdown text..."
      />
    </div>
  );
}

export default Editor;
