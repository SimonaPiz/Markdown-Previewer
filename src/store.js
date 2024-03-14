import {configureStore} from '@reduxjs/toolkit';

import markdownConverterReducer from './features/MarkdownConverter/markdownConverterSlice.js';

export const store = configureStore({
  reducer: {
    markdownConverter: markdownConverterReducer,
  },
});