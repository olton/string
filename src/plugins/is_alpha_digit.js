import { REGEXP_ALPHA_DIGIT } from "../helpers/regexp/regexp.js";
import {toStr} from "../helpers/string/to_string.js";

export const isAlphaDigit = s => REGEXP_ALPHA_DIGIT.test(toStr(s))
export const isAlphaNum = isAlphaDigit