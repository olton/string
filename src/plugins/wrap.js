import {toStr} from "../helpers/string/to_string.js";

export const wrapTag = (s, tag = "div", attr = {}) => {
    let _str = toStr(s)
    let attributes = Object.keys(attr).map(key => `${key}="${attr[key]}"`).join(" ")

    if (attributes) {
        attributes = " " + attributes
    }

    return `<${tag}${attributes}>${_str}</${tag}>`
}

export const wrap = (s, before = "", after = "") => before + toStr(s) + after
