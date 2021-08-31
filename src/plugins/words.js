import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp"
import {toStr} from "../helpers/string/to_string"
import {nvl} from "../helpers/nvl"

/*
* Split string to words. You can set specified patter to split
* */
export const words = (s, pattern, flags) => {
    let regexp;

    if (!pattern) {
        regexp = REGEXP_EXTENDED_ASCII.test(s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
    } else if (pattern instanceof RegExp) {
        regexp = pattern;
    } else {
        regexp = new RegExp(pattern, nvl(flags, ''))
    }

    return nvl(toStr(s).match(regexp), []);
}
