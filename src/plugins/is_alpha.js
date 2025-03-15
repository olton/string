import { REGEXP_ALPHA } from "../helpers/regexp/regexp.js";
import {toStr} from "../helpers/string/to_string.js";

export const isAlpha = s => REGEXP_ALPHA.test(toStr(s))