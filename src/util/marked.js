import { marked } from 'marked';

marked.use({
  breaks: true,
  gfm: true,
  async: true,
})
  
export const parseText = (text) => {
  return marked.parse(text);
}