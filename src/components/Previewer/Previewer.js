import React from 'react';
import { Interweave } from 'interweave';
import './Previewer.css';

export default function Previewer ({textConverted}) {

  return (
    <div id='prevContainer'>
      <h2>
        <span className="material-symbols-outlined icon">preview</span>
        Previewer
      </h2>
      
      <Interweave 
        tagName="div"
        attributes={{'id':'preview'}}
        content={textConverted} 
      />
      
    </div>
  );
}