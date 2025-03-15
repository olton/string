import {toStr} from "../helpers/string/to_string.js";

/*
* Get substring from string.
* */
export const substring = (s, start, len) => toStr(s).substring(start, len);
