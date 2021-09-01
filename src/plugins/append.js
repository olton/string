import {repeat} from "./repeat";
import {toStr} from "../helpers/string/to_string";

export const append = (s, what = '', times = 1) => toStr(s) + repeat(what, times)