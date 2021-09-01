import {trim} from "./trim";
import {toStr} from "../helpers/string/to_string";

export const isBlank = (s, strong = true) => strong ? toStr(s).length === 0 : trim(s).length === 0