import { Converter } from "showdown";

const converter = new Converter();

export default (md) => converter.makeHtml(md);
