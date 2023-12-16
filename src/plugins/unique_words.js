import {uniqueArray} from "../helpers/array/unique";
import {words} from "./words";

export const uniqueWords = (s, pattern, flags) => uniqueArray(words(s, pattern, flags)).join("")