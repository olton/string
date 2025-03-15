import {toStr} from "../helpers/string/to_string.js"
import { trim } from "./trim.js"

export const matches = (s, pattern, flags = '') => {
    let _s = toStr(s)
    let patternStr

    if (!(pattern instanceof RegExp)) {
        patternStr = pattern ? trim(toStr(pattern)) : ''
        if (!patternStr) {
            return false
        }
        pattern = new RegExp(patternStr, flags)
    }
    return pattern.test(_s)
}