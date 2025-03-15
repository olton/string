import {toStr} from "../helpers/string/to_string.js"
import {clip} from "../helpers/number/clip.js"
import {toInt} from "../helpers/number/to_integer.js"
import { MAX_SAFE_INTEGER } from "../helpers/number/const.js"

export const repeat = (s, times = 0) => {
    let _s = toStr(s)
    let _times = !times ? _s.length : clip(toInt(times), 0, MAX_SAFE_INTEGER)
    const _origin = _s

    if (times === 0) {
        return "";
    }

    for(let i = 0; i < _times - 1; i++) {
        _s += _origin
    }

    return _s
}