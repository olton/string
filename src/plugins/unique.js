import {uniqueArray} from "../helpers/array/unique";
import {chars} from "./chars";

export const unique = (s, ignore) => uniqueArray(chars(s, ignore)).join("")