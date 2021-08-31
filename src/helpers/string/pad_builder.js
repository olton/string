import {repeat} from "../../plugins/repeat";

export const padBuilder = (pad, len = 0) => {
    const padLength = pad.length
    const length = len - padLength

    return repeat(pad, length + 1).substr(0, len)
}