import {toStr} from "../helpers/string/to_string.js";
import {isEmpty} from "./is_empty.js";

export const split = (str, sep = undefined, limit = undefined, trim = true) => {
    return toStr(str)
        .split(sep, limit)
        .map( el => trim ? el.trim() : el )
        .filter( el => trim ? !isEmpty(el) : true)
}