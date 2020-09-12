import remark from "remark";
import remarkGuidePlugin from "remark-preset-lint-markdown-style-guide";
import remarkHtmlPlugin from "remark-html";

const remarkProcessor = remark().use(remarkGuidePlugin).use(remarkHtmlPlugin);

export default (md) => String(remarkProcessor.processSync(md));
