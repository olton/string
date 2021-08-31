import {words} from "./words";
import {toStr} from "../helpers/string/to_string";

export const snake = s => words(toStr(s)).map( el => el.toLowerCase() ).join("_")
