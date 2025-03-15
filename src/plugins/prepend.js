import {repeat} from "./repeat.js";
import {toStr} from "../helpers/string/to_string.js";

export const prepend = (s, what = '', times = 1) => repeat(what, times) + toStr(s)