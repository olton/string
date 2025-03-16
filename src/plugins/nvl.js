import {not} from "../helpers/not.js";

export const nvl = (s, ..._nvl) => {
    if (!not(s)) {
        return s;
    }

    if (_nvl.length === 0) {
        throw new Error('nvl: No default value provided');
    } else {
        for (const v of _nvl) {
            if (typeof v !== "undefined" && v !== null) {
                return v;
            }
        }
    }

    return undefined
}