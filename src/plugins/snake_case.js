import {words} from "./words.js";
import {toStr} from "../helpers/string/to_string.js";

export const snake = s => words(toStr(s)).map( el => el.toLowerCase() ).join("_")
