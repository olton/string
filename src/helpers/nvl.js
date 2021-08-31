export const nvl = (a, b) => {
    return (typeof a === "undefined" || a === null) ? b : a
}
