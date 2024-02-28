import React from 'react';
import './Previewer.css';

export default function Previewer () {

  return (
    <div id='prevContainer'>
      <h2>
        <span class="material-symbols-outlined icon">preview</span>
        Previewer
      </h2>

      <div id='preview'></div>
    </div>
  );
}