import React, { useEffect, useState } from 'react';
import { Markup } from 'interweave';
import './Previewer.css';
import { useDispatch } from 'react-redux';

export default function Previewer ({textConverted, isFullscreen, toggleFullscreen}) {
  const [iconFullscreen, setIconFullscreen] = useState('fullscreen')
  const dispatch = useDispatch();

  const handleClick = () => {
    setIconFullscreen(iconFullscreen === 'fullscreen' ? 'fullscreen_exit' : 'fullscreen');
  }
  
  useEffect(() => {
    dispatch(toggleFullscreen('prev'));
  }, [iconFullscreen])

  return (
    <div id='prevContainer' className={(isFullscreen ? 'fullscreen' : '')}>
      <div className='head'>
        <h2>
          <span className="material-symbols-outlined icon">preview</span>
          Previewer
        </h2>
        <button 
          className="material-symbols-outlined icon-fullscreen icon"
          onClick={handleClick}
        >{iconFullscreen}</button>
      </div>
      
      <div id='preview'>
      <Markup
        content={textConverted} 
        emptyContent=''
        noWrap='true'
      />
      </div>
      
    </div>
  );
}