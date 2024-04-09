import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import defaultText from '../../components/Editor/defaultText';
import { parseText } from '../../util/marked';

export const convertText = createAsyncThunk(
  'markdownConverter/convertText',
  async (text) => {
    const response = await parseText(text);
    return response;
  }
);


export const markdownConverterSlice = createSlice({
  name: 'markdownConverter',
  initialState: {
    textInput: defaultText,
    textConverted: '',
    editorFullscreen: true,
    prevFullscreen: true,
  },
  reducers: {
    setTextInput: (state, action) => {
      state.textInput = action.payload;
    },
    toggleFullscreen: (state, action) => {
      if (action.payload === 'editor') {
        state.editorFullscreen = !state.editorFullscreen;
      } else {
        state.prevFullscreen = !state.prevFullscreen;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(convertText.fulfilled, (state, action) => {
      state.textConverted = action.payload;
    })
  }
});

export const {setTextInput, toggleFullscreen} = markdownConverterSlice.actions;
export default markdownConverterSlice.reducer;