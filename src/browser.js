import {str, Str} from "./core/class";

globalThis.Str = Str
globalThis.str = str
if (!globalThis.string) {
    globalThis.string = str
}