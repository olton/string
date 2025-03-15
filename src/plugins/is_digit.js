import { REGEXP_DIGIT } from "../helpers/regexp/regexp.js";
import {toStr} from "../helpers/string/to_string.js";

export const isDigit = s => REGEXP_DIGIT.test(toStr(s))