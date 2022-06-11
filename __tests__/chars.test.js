import {chars} from "../src/plugins/chars.js";
import {Str, str} from "../src/index.js"

describe("Test chars function", () => {
    it("Function test", () => {
        expect(chars("abc")).toEqual(["a", "b", "c"])
    })

    it("Function test ignore", () => {
        expect(chars("abc", "b")).toEqual(["a", "c"])
    })

    it("Static test", () => {
        expect(Str.chars("abc")).toEqual(["a", "b", "c"])
    })

    it("Static test ignore", () => {
        expect(Str.chars("abc", "b")).toEqual(["a", "c"])
    })

    it("Class test", () => {
        expect(str("abc").chars().val).toEqual(["a", "b", "c"])
    })

    it("Class test ignore", () => {
        expect(str("abc").chars("b").val).toEqual(["a", "c"])
    })
})


