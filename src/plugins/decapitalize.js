import {toStr} from "../helpers/string/to_string";

export const decapitalize = s => {
    let _s = toStr(s);
    return (_s).substr(0, 1).toLowerCase() + (_s).substr(1)
}
