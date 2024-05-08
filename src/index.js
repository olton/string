import {str, Str} from "./core/class";

const version = "0.5.0"
const build_time = "08.05.2024, 14:20:26"

const info = () => {
    console.info(`%c String %c v${version} %c ${build_time} `, "color: #000000; font-weight: bold; background: #fff200", "color: white; background: darkgreen", "color: white; background: #0080fe;")
}

Str.info = info

export {
    str,
    Str
}