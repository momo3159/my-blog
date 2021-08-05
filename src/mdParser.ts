import marked from 'marked';
import highlightjs from 'highlight.js';

marked.setOptions({
  highlight(code, lang) {
    return highlightjs.highlightAuto(code, ["Go"]).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  silent: false,
});

export default marked;


