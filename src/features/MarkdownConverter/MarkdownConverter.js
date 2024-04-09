import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';

import Editor from "../../components/Editor/Editor";
import Previewer from "../../components/Previewer/Previewer";
import { setTextInput, convertText, toggleFullscreen } from "./markdownConverterSlice.js";

export default function MarkdownConverter() {

  const textInput = useSelector((state) => state.markdownConverter.textInput);
  const dispatch = useDispatch();
  const textConverted = useSelector((state) => state.markdownConverter.textConverted);
  const isFullscreenEd = useSelector((state) => state.markdownConverter.editorFullscreen);
  const isFullscreenPr = useSelector((state) => state.markdownConverter.prevFullscreen);

  console.log(isFullscreenEd, isFullscreenPr)

  useEffect(() => {
    dispatch(convertText(textInput));
  }, [textInput]);

  const [converterClass, setConverterClass] = useState('converter');
  
  useEffect(() => {
    if (isFullscreenEd || isFullscreenPr) {
      setConverterClass(' converterFull');
    } else {
      setConverterClass('');
    }
  }, [isFullscreenEd, isFullscreenPr])

  return (
    <div className={'converter' + converterClass}>
      <Editor 
        text={textInput} 
        setTextInput={setTextInput} 
        isFullscreen={isFullscreenEd} 
        toggleFullscreen={toggleFullscreen}
      />
      <span className="material-symbols-outlined" id='right-arrow'>
        arrow_right_alt
      </span>
      <Previewer 
        textConverted={textConverted} 
        isFullscreen={isFullscreenPr} 
        toggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}