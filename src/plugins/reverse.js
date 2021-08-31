import {chars} from "./chars";
import {toStr} from "../helpers/string/to_string";

export const reverse = (s, ignore) => chars(toStr(s), ignore).reverse().join("");

