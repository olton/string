import {toStr} from "../helpers/string/to_string"
import {clip} from "../helpers/number/clip"
import {toInt} from "../helpers/number/to_integer"
import { MAX_SAFE_INTEGER } from "../helpers/number/const"

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