import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

import Editor from "../../components/Editor/Editor";
import Previewer from "../../components/Previewer/Previewer";
import { setTextInput, convertText } from "./markdownConverterSlice.js";

export default function MarkdownConverter() {

  const textInput = useSelector((state) => state.markdownConverter.textInput);
  const dispatch = useDispatch();
  const textConverted = useSelector((state) => state.markdownConverter.textConverted);

  useEffect(() => {
    dispatch(convertText(textInput));
  }, [dispatch, textInput]);

  return (
    <div className="converter">
      <Editor text={textInput} dispatch={dispatch} setTextInput={setTextInput} />
      <span className="material-symbols-outlined" id='right-arrow'>
        arrow_right_alt
      </span>
      <Previewer textConverted={textConverted} />
    </div>
  );
}