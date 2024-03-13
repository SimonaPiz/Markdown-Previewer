import { marked } from 'marked';
  
export const parseText = (text) => {
  return marked.parse(text);
}