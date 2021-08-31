export const toBool = (val, def = false) => {
    if (typeof val === "undefined" || val === null) return def;
    if (isNaN(val)) {
        if (typeof val === "string") {
            return ["1", "true", "yes", "ok"].includes(val.toLowerCase())
        } else {
            return true
        }
    } else {
        return +val !== 0
    }
}