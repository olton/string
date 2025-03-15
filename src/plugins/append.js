import {repeat} from "./repeat.js";
import {toStr} from "../helpers/string/to_string.js";

export const append = (s, what = '', times = 1) => toStr(s) + repeat(what, times)