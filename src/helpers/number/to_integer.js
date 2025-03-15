import {MAX_SAFE_INTEGER} from "./const.js";

export const toInt = val => {
    if (val === Infinity) return MAX_SAFE_INTEGER;
    if (val === -Infinity) return -MAX_SAFE_INTEGER;
    return ~~val;
}