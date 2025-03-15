import {uniqueArray} from "../helpers/array/unique.js";
import {words} from "./words.js";

export const uniqueWords = (s, pattern, flags) => uniqueArray(words(s, pattern, flags)).join("")