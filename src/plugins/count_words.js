import {words} from "./words";
import {unique} from "../helpers/array/unique";

export const countWords = (s, pattern, flags) => words(s, pattern, flags).length;
export const countUniqueWords = (s, pattern, flags) => unique(words(s, pattern, flags)).length;