import {words} from "./words.js";
import {uniqueArray} from "../helpers/array/unique.js";

export const countWords = (s, pattern, flags) => words(s, pattern, flags).length;
export const countUniqueWords = (s, pattern, flags) => uniqueArray(words(s, pattern, flags)).length;