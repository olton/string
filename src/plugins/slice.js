import {toStr} from "../helpers/string/to_string.js";
import {substring} from "./substr.js";

/*
* Slice string to N parts.
* */
export const slice = (s, parts = 1) => {
  let _s = toStr(s)
  let res = []
  let len = Math.round(_s.length / parts)

  for(let i = 0; i < parts; i++) {
    res.push(
      substring(_s, i * len, len)
    )
  }

  return res
}