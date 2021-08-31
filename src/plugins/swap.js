import {toStr} from "../helpers/string/to_string";

const _swap = (swapped, char) => {
    const lc = char.toLowerCase()
    const uc = char.toUpperCase()

    return swapped + (char === lc ? uc : lc)
}

export const swap = s => toStr(s).split("").reduce(_swap, '')
