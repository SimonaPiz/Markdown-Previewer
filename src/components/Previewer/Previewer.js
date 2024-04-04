import React from 'react';
import { Markup } from 'interweave';
import './Previewer.css';

export default function Previewer ({textConverted}) {

  return (
    <div id='prevContainer'>
      <h2>
        <span className="material-symbols-outlined icon">preview</span>
        Previewer
      </h2>
      
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