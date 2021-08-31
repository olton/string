import {toStr} from "../helpers/string/to_string";

export const stripe = (str, what = null, replace = "") => {
    let _str = toStr(str)
    let regexp

    if (!what) return _str

    regexp = new RegExp(what, "g")

    return _str.replace(regexp, replace)
}
