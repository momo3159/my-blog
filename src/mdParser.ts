import marked from 'marked';
import highlightjs from 'highlight.js';
import Prism from './styles/prism_.js';

const renderer = new marked.Renderer();

renderer.code = function (code, language) {
  const lang = language
    ? Prism.languages.extend(language, '') ||
      Prism.languages.extend(language.toLowerCase(), '') ||
      Prism.languages.extend(language.toUpperCase(), '') ||
      Prism.languages.plaintext
    : Prism.languages.plaintext;

  return `<pre class=language-${lang}><code class=language-${lang}>${Prism.highlight(
    code,
    lang,
    lang,
  )}</code></pre>`;
};

marked.setOptions({
  renderer: renderer,
  // highlight(code, lang) {
  //   return highlightjs.highlightAuto(code, [lang]).value;
  // },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  silent: false,
});

export default marked;
