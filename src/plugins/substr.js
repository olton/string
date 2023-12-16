import {toStr} from "../helpers/string/to_string";

/*
* Get substring from string.
* */
export const substring = (s, start, len) => toStr(s).substring(start, len);
