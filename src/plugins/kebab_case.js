import {words} from "./words";
import {toStr} from "../helpers/string/to_string";

export const kebab = (s, joinWith = '-') => words(toStr(s)).map( el => el.toLowerCase() ).join(joinWith)
