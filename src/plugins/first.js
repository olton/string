import {toStr} from "../helpers/string/to_string";
import {substr} from "./substr";

/*
* Get N first chars from string.
* */
export const first = (s, len = 0) => {
  let _s = toStr(s);
  return _s ? substr(_s, 0, len) : '';
}