import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [markdown, setMarkdown] = useState('');

  function handleInputChange(event) {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Converter</h1>
      <div className="converter">
        <Editor value={markdown} onChange={handleInputChange} />
        <Preview value={markdown} />
      </div>
    </div>
  );
}

export default App;
