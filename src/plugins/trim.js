import {toStr} from "../helpers/string/to_string";
import { REGEXP_TRIM_LEFT, REGEXP_TRIM_RIGHT } from "../helpers/regexp/regexp";

const reduce = Array.prototype.reduce;
const reduceRight = Array.prototype.reduceRight;

export const trim = (s, ws) => ltrim(rtrim(s, ws), ws)

export const ltrim = (s, ws) => {
    let _s = toStr(s)

    if (!ws) {return _s.replace(REGEXP_TRIM_LEFT, '')}
    if (ws === '' || _s === '') {return _s}
    if (typeof ws !== "string") {ws = ''}

    let match = true

    return reduce.call(
        _s,
        (trimmed, char) => {
            if (match && ws.includes(char)) {
                return trimmed;
            }
            match = false
            return trimmed + char
        },
        ''
    );
}

export const rtrim = (s, ws) => {
    let _s = toStr(s)

    if (!ws) {return _s.replace(REGEXP_TRIM_RIGHT, '')}
    if (ws === '' || _s === '') {return _s}
    if (typeof ws !== "string") {ws = ''}

    let match = true

    return reduceRight.call(
        _s,
        (trimmed, char) => {
            if (match && ws.includes(char)) {
                return trimmed
            }
            match = false
            return char + trimmed
        },
        ''
    );
}