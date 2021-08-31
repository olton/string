import {toStr} from "../helpers/string/to_string";

/*
* Split string to chars array with ignores
* */
export const chars = (s, ignore = []) => (toStr(s)).split("").filter( (el) => !ignore.includes(el))
