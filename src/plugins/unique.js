import {uniqueArray} from "../helpers/array/unique.js";
import {chars} from "./chars.js";

export const unique = (s, ignore) => uniqueArray(chars(s, ignore)).join("")