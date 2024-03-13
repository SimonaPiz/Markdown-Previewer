import React, {useState} from 'react';
import './Editor.css';
import defaultText from './defaultText';

export default function Editor () {
  const [textValue, setTextValue] = useState(defaultText);

  const handleChange = (e) => {
    setTextValue(e.target.value);
  }

  return (
    <div id='editorContainer'>
      <h2>
        <span className="material-symbols-outlined icon">code</span>
        Editor
      </h2>
  
      <textarea 
        id='editor' 
        typeof='text' 
        value={textValue}
        onChange={(e) => handleChange(e)}
        required
      ></textarea>
    </div>
  );
}