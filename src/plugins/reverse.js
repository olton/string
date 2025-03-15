import {chars} from "./chars.js";
import {toStr} from "../helpers/string/to_string.js";

export const reverse = (s, ignore) => chars(toStr(s), ignore).reverse().join("");

