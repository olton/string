import {toStr} from "../helpers/string/to_string";
import {BYTE_ORDER_MARK} from "../helpers/number/const";

export const stripBoom = s => {
    let _s = toStr(s)
    if (_s === '') return _s
    return _s[0] === BYTE_ORDER_MARK ? _s.substr(1) : _s
}