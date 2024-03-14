import React, {useState, useEffect} from 'react';
import './Editor.css';

export default function Editor ({text, dispatch, setTextInput}) {
  const [textValue, setTextValue] = useState(text);

  const handleChange = (e) => {
    setTextValue(e.target.value);
  }

  useEffect(() => {
    dispatch(setTextInput(textValue));
  }, [dispatch, textValue]);

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