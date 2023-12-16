import {toStr} from "../helpers/string/to_string.js";
import {substring} from "./substr.js";

/*
* Get N first chars from string.
* */
export const first = (s, len = 0) => substring(toStr(s), 0, len);