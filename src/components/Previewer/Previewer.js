import React from 'react';
import { Markup } from 'interweave';
import './Previewer.css';

export default function Previewer ({textConverted}) {

  return (
    <div id='prevContainer'>
      <div className='head'>
        <h2>
          <span className="material-symbols-outlined icon">preview</span>
          Previewer
        </h2>
        <span className="material-symbols-outlined icon-fullscreen icon">fullscreen</span>
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