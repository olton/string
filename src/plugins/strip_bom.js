import {toStr} from "../helpers/string/to_string.js";
import {BYTE_ORDER_MARK} from "../helpers/number/const.js";

export const stripBoom = s => {
    let _s = toStr(s)
    if (_s === '') return _s
    return _s[0] === BYTE_ORDER_MARK ? _s.substring(1) : _s
}