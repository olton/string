/**
 * Shorten a string
 * @param v
 * @param l
 * @param d
 * @returns {*|string}
 */
export const shorten = (v, l = 5, d = '...') => !v ? v : `${v.substring(0, l)}${d}${v.substring(v.length - l)}`