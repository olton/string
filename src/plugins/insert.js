import {toStr} from "../helpers/string/to_string.js";

export const insert = (s, sbj = '', pos = 0) => {
    let _s = toStr(s);
    return _s.substring(0, pos) + sbj + _s.substring(pos)
}