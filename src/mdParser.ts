import marked from 'marked';
import highlightjs from 'highlight.js';

marked.setOptions({
  highlight(code, lang) {
    const language = highlightjs.getLanguage(lang) ? lang : 'plaintext'
    return highlightjs.highlightAuto(code, [lang]).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  silent: false,
});

export default marked;


