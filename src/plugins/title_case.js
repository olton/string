import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp.js";
import {capitalize} from "./capitalize.js";
import {lower} from "./lower_case.js";
import {toStr} from "../helpers/string/to_string.js";

/**
 * Converts a string to title case, optionally allowing customization for splitting and ignoring certain characters.
 *
 * @param {string} s - The input string to be converted to title case.
 * @param {string|string[]|boolean} noSplit - A string, an array of characters, or a boolean indicating the characters to skip capitalization.
 * @param {string} [sep=""] - The separator to split the `noSplit` string (if `noSplit` is a string).
 * @returns {string} - The input string converted to title case.
 */
export const title = (s, noSplit, sep = "") => {
    let _s = toStr(s)
    const regexp = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
    const noSplitArray = Array.isArray(noSplit) ? noSplit : typeof noSplit !== "string" ?  [] : noSplit.split(sep);

    return s.replace(regexp, (w, i) => {
        const isNoSplit = i && noSplitArray.includes(_s[i - 1]);
        return isNoSplit ? lower(w) : capitalize(w);
    })
}
