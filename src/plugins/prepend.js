import {repeat} from "./repeat";
import {toStr} from "../helpers/string/to_string";

export const prepend = (s, what = '', times = 1) => repeat(what, times) + toStr(s)