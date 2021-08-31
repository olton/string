import {toStr} from "../helpers/string/to_string";
import {shuffleArray} from "../helpers/array/shuffle";

export const shuffle = s => shuffleArray(toStr(s).split("")).join("")
