import {MAX_SAFE_INTEGER} from "./const";

export const clip = (val, min, max = MAX_SAFE_INTEGER) => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
}