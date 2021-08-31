export const toStr = (val, def = "") => {
    if (!val) return def;
    if (typeof val === "string") return val;
    if (Array.isArray(val)) return val.join("");
    return JSON.stringify(val);
}