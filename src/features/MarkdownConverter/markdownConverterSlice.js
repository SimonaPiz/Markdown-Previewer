import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import defaultText from '../../components/Editor/defaultText';


export const markdownConverterSlice = createSlice({
  name: 'markdownConverter',
  initialState: {
    textInput: defaultText,
  },
  reducers: {
    setTextInput: (state, action) => {
      state.textInput = action.payload;
    }
  }
});

export const {setTextInput} = markdownConverterSlice.actions;
export default markdownConverterSlice.reducer;