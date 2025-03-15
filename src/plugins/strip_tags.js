import {toStr} from "../helpers/string/to_string.js";
import { REGEXP_TAGS } from "../helpers/regexp/regexp.js";

export const stripTagsAll = s => toStr(s).replace(REGEXP_TAGS, '')

export const stripTags = (s, allowed = []) => {
    let _s = toStr(s)
    let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi

    return _s.replace(tags, ($0, $1) => {
        return allowed.includes($1) ? $0 : ''
    })
}