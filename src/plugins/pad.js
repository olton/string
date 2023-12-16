import {toStr} from "../helpers/string/to_string"
import {clip} from "../helpers/number/clip"
import {toInt} from "../helpers/number/to_integer"
import { MAX_SAFE_INTEGER } from "../helpers/number/const"
import {repeat} from "./repeat";

const padBuilder = (pad, len = 0) => {
    const padLength = pad.length
    const length = len - padLength

    return repeat(pad, length + 1).substring(0, len)
}

const _pad = (s, pad = "", len = 0, left = false) => {
    let _s = toStr(s)
    let _len = !len ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER)
    let _padLen = pad.length
    let _paddingLen = _len - _s.length
    let _sideLen = _paddingLen

    if (_paddingLen <= 0 || _padLen === 0) {return _s}

    let pads = padBuilder(pad, _sideLen)

    return left ? pads + _s : _s + pads
}

export const lpad = (s, pad = ' ', len = 0) => {
    return _pad(s, pad, len,  true)
}

export const rpad = (s, pad = ' ', len = 0) => {
    return _pad(s, pad, len, false)
}

export const pad = (s, pad = '', len = 0) => {
    let _s = toStr(s)
    let _len = !len ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER)
    let _padLen = pad.length
    let _paddingLen = _len - _s.length
    let _sideLen = toInt(_paddingLen / 2) //?
    let _remainingLen = _paddingLen % 2 //?

    if (_paddingLen <= 0 || _padLen === 0) {return _s}

    return padBuilder(pad, _sideLen) + _s + padBuilder(pad, _sideLen + _remainingLen) //?
}
