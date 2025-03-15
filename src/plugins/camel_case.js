import {words} from "./words.js";
import {capitalize} from "./capitalize.js";
import {toStr} from "../helpers/string/to_string.js";

export const camelCase = s => {
    return words(toStr(s)).map( (el, i) => {
        return i === 0 ? el.toLowerCase() : capitalize(el)
    } ).join("")
}
