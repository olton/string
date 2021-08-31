import { REGEXP_ALPHA_DIGIT } from "../helpers/regexp/regexp";
import {toStr} from "../helpers/string/to_string";

export const isAlphaDigit = s => REGEXP_ALPHA_DIGIT.test(toStr(s))