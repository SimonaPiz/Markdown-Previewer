import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import Editor from "../../components/Editor/Editor";
import Previewer from "../../components/Previewer/Previewer";
import { setTextInput } from "./markdownConverterSlice.js";

export default function MarkdownConverter() {

  const textInput = useSelector((state) => state.markdownConverter.textInput);
  const dispatch = useDispatch();

  return (
    <div className="converter">
      <Editor text={textInput} dispatch={dispatch} setTextInput={setTextInput} />
      <span className="material-symbols-outlined" id='right-arrow'>
        arrow_right_alt
      </span>
      <Previewer />
    </div>
  );
}