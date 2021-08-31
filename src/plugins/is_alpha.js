import { REGEXP_ALPHA } from "../helpers/regexp/regexp";
import {toStr} from "../helpers/string/to_string";

export const isAlpha = s => REGEXP_ALPHA.test(toStr(s))