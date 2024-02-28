import React, {useState} from 'react';
import './Editor.css';

export default function Editor () {
  const defaultText = `# Welcome to my React Markdown Previewer!
\n## This is a sub-heading...
### And here's some other cool stuff:
\nHeres some code, \`<div></div>\`, between 2 backticks.
\n\`\`\`
// this is multi-line code:
\n  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' \&\& lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
\`\`\`
\nYou can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
\nThere's also [links](https://www.freecodecamp.org), and
> Block Quotes!
\nAnd if you want to get really crazy, even tables:
\nWild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.  
\n  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
\n\n1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

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