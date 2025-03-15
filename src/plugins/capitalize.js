import {toStr} from "../helpers/string/to_string.js";

export const capitalize = (s, strong = false) => {
    let _s = toStr(s)
    let last = (_s).substring(1);
    return (_s).substring(0, 1).toUpperCase() + (strong ? last.toLowerCase() : last)
}
