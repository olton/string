import {toStr} from "../helpers/string/to_string.js";
import {shuffleArray} from "../helpers/array/shuffle.js";

export const shuffle = s => shuffleArray(toStr(s).split("")).join("")
