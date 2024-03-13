import React from "react";

import Editor from "../../components/Editor/Editor";
import Previewer from "../../components/Previewer/Previewer";

export default function MarkdownConverter() {
  return (
    <div className="converter">
      <Editor />
      <span className="material-symbols-outlined" id='right-arrow'>
        arrow_right_alt
      </span>
      <Previewer />
    </div>
  );
}