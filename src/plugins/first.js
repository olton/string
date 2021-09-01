import {toStr} from "../helpers/string/to_string";
import {substr} from "./substr";

/*
* Get N first chars from string.
* */
export const first = (s, len = 0) => substr(toStr(s), 0, len);