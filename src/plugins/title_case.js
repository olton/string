import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp";
import {capitalize} from "./capitalize";
import lower from "./lower_case";
import {toStr} from "../helpers/string/to_string";

export const title = (s, noSplit, sep = "") => {
    let _s = toStr(s)
    const regexp = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
    const noSplitArray = Array.isArray(noSplit) ? noSplit : typeof noSplit !== "string" ?  [] : noSplit.split(sep);

    return s.replace(regexp, (w, i) => {
        const isNoSplit = i && noSplitArray.includes(_s[i - 1]);
        return isNoSplit ? lower(w) : capitalize(w);
    })
}
