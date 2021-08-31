export const toNum = (val, def = 0) => {
    if (typeof val === "undefined" || val === null) {
        return def;
    }

    return +val;
}