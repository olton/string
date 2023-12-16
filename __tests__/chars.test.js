import {describe, test, expect} from "vitest";
import {chars} from "../src/plugins/chars.js";
import {Str, str} from "../src/index.js"

describe("Test chars function", () => {
    test("Function test", () => {
        expect(chars("abc")).toEqual(["a", "b", "c"])
    })

    test("Function test ignore", () => {
        expect(chars("abc", "b")).toEqual(["a", "c"])
    })

    test("Static test", () => {
        expect(Str.chars("abc")).toEqual(["a", "b", "c"])
    })

    test("Static test ignore", () => {
        expect(Str.chars("abc", "b")).toEqual(["a", "c"])
    })

    test("Class test", () => {
        expect(str("abc").chars().val()).toEqual(["a", "b", "c"])
    })

    test("Class test ignore", () => {
        expect(str("abc").chars("b").val()).toEqual(["a", "c"])
    })
})


