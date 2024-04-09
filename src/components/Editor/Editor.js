import React, {useState, useEffect} from 'react';
import './Editor.css';
import { useDispatch } from 'react-redux';

export default function Editor ({text, setTextInput, isFullscreen, toggleFullscreen}) {
  const [textValue, setTextValue] = useState(text);
  const [iconFullscreen, setIconFullscreen] = useState('fullscreen')
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTextValue(e.target.value);
  }

  useEffect(() => {
    dispatch(setTextInput(textValue));
  }, [textValue, setTextInput]);

  const handleClick = () => {
    setIconFullscreen(iconFullscreen === 'fullscreen' ? 'fullscreen_exit' : 'fullscreen');
  }

  useEffect(() => {
    dispatch(toggleFullscreen('editor'));
  }, [iconFullscreen])

  return (
    <div id='editorContainer' className={(isFullscreen ? 'fullscreen' : '')} >
      <div className='head'>
        <h2>
          <span className="material-symbols-outlined icon">code</span>
          Editor
        </h2>
        <button 
          className="material-symbols-outlined icon-fullscreen icon"
          onClick={handleClick}
        >{iconFullscreen}</button>
      </div>
  
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