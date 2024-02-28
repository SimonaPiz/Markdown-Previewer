import React from 'react';
import './Editor.css';

export default function Editor () {

  return (
    <div id='editorContainer'>
      <div>
        <h2>Editor</h2>
      </div>
      <textarea 
        id='editor' 
        typeof='text' 
        defaultValue={'some code'}
        required
      ></textarea>
    </div>
  );
}