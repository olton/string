import {toStr} from "../helpers/string/to_string";
import {substr} from "./substr";

/*
* Get N last chars from string.
* */
export const last = (s, len = 0) => {
  let _s = toStr(s);
  return _s ? substr(_s, _s.length - len) : '';
}