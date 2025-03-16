export const toStr = (val, def = "") => {
    if (!val && typeof val !== "number" && typeof val !== "boolean") return def;
    if (typeof val === "string") return val;
    if (Array.isArray(val)) return val.join("");
    return JSON.stringify(val);
}