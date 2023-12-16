import {toStr} from "../helpers/string/to_string.js";
import {substring} from "./substr.js";

/*
* Get N last chars from string.
* */
export const last = (s, len = 0) => {
  let _s = toStr(s);
  return _s ? substring(_s, _s.length - len) : '';
}