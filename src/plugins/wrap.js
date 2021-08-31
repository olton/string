import {toStr} from "../helpers/string/to_string";

export const wrapTag = (s, tag = "div") => `<${tag}>${toStr(s)}</${tag}>`
export const wrap = (s, before = "", after = "") => before + toStr(s) + after
