import { Remarkable } from "remarkable";

const renderer = new Remarkable();

export default (md) => renderer.render(md);
