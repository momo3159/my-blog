import marked from 'marked';
import Prism from "prismjs"

marked.setOptions({
  highlight(code, lang) {
    return Prism.highlight(code, lang)
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  silent: false,
});

export default marked;


