import {trim} from "./trim.js";
import {toStr} from "../helpers/string/to_string.js";

export const isBlank = (s, strong = true) => strong ? toStr(s).length === 0 : trim(s).length === 0