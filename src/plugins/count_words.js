import {words} from "./words";
import {uniqueArray} from "../helpers/array/unique";

export const countWords = (s, pattern, flags) => words(s, pattern, flags).length;
export const countUniqueWords = (s, pattern, flags) => uniqueArray(words(s, pattern, flags)).length;