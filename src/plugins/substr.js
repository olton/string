import {toStr} from "../helpers/string/to_string";

/*
* Get substring from string.
* */
export const substr = (s, start, len) => toStr(s).substr(start, len);