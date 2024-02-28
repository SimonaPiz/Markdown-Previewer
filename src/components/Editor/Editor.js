import React from 'react';
import './Editor.css';

export default function Editor () {

  return (
    <div id='editorContainer'>
      <h2>
        <span className="material-symbols-outlined icon">code</span>
        Editor
      </h2>
  
      <textarea 
        id='editor' 
        typeof='text' 
        defaultValue={'some code'}
        required
      ></textarea>
    </div>
  );
}