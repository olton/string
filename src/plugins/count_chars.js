import {chars} from "./chars.js";
import {uniqueArray} from "../helpers/array/unique.js";

export const countChars = (s, ignore) => chars(s, ignore).length
export const countUniqueChars = (s, ignore) => uniqueArray(chars(s, ignore)).length
