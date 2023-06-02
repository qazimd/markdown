import React from 'react';
import ReactMarkdown from 'react-markdown';

function Preview({ value }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="preview-content">
        <ReactMarkdown children={value} />
      </div>
    </div>
  );
}

export default Preview;
