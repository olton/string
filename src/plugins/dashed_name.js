import {words} from "./words";
import {toStr} from "../helpers/string/to_string";

export const dashedName = s => words(toStr(s)).map( (el) => el.toLowerCase() ).join("-")
