import {words} from "./words";
import {toStr} from "../helpers/string/to_string";

export default function kebab(s){
    return words(toStr(s)).map( el => el.toLowerCase() ).join("-")
}
