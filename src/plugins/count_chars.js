import {chars} from "./chars";
import {unique} from "../helpers/array/unique";

export const countChars = (s, ignore) => chars(s, ignore).length
export const countUniqueChars = (s, ignore) => unique(chars(s, ignore)).length
