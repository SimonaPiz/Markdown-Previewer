import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import defaultText from '../../components/Editor/defaultText';


export const markdownConverterSlice = createSlice({
  name: 'markdownConverter',
  initialState: {
    textInput: '',
  },
  reducers: {
    loadDefaultTextInput : (state) => {
      state.textInput = defaultText;
    },
    setTextInput: (state, action) => {
      state.textInput = action.payload;
    }
  }
});

export const {setTextInput, loadDefaultTextInput} = markdownConverterSlice.actions;
export default markdownConverterSlice.reducer;