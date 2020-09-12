import prettier from "prettier/standalone";
import prettierHtml from "prettier/parser-html";

export default (html) =>
  prettier.format(html, {
    parser: "html",
    plugins: [prettierHtml],
  });
