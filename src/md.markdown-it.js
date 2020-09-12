import MarkdownIt from "markdown-it";
const markdownIt = new MarkdownIt();

export default (md) => markdownIt.render(md);
