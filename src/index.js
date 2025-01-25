import {str, Str} from "./core/class";

const version = "__VERSION__"
const build_time = "__BUILD_TIME__"

const info = () => {
    console.info(`%c String %c v${version} %c ${build_time} `, "color: #000000; font-weight: bold; background: #fff200", "color: white; background: darkgreen", "color: white; background: #0080fe;")
}

Str.info = info

export {
    str,
    Str
}