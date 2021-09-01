import {chars} from "./chars";
import {uniqueArray} from "../helpers/array/unique";

export const countChars = (s, ignore) => chars(s, ignore).length
export const countUniqueChars = (s, ignore) => uniqueArray(chars(s, ignore)).length
