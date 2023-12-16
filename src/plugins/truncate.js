import {toStr} from "../helpers/string/to_string";
import {substring} from "./substr";
import {clip} from "../helpers/number/clip"
import {toInt} from "../helpers/number/to_integer";
import { MAX_SAFE_INTEGER } from "../helpers/number/const";

/*
* Truncates `subject` to a new `length` with specified ending.
* */
export const truncate = (s, len = 0, end = '...') => {
  let _s = toStr(s)
  let _len = !len ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER)

  return substring(_s, 0, _len) + (_s.length === _len ? '' : end)
}

export const truncateWithAlign = (s, len = 0, end = '...') => {
  const truncatedText = truncate(s, len, '')
  return truncatedText.slice(s, truncatedText.lastIndexOf(" ")) + end
}