import {describe, test, expect} from "vitest";
import {capitalize} from "../src/plugins/capitalize.js";
import {Str, str} from "../src/index.js"

describe("Test capitalize function", () => {
    test("Function test", () => {
        expect(capitalize("capitalize")).toBe("Capitalize")
    })

    test("Function test strong", () => {
        expect(capitalize("caPiTalizE", true)).toBe("Capitalize")
    })

    test("Static test", () => {
        expect(Str.capitalize("capitalize")).toBe("Capitalize")
    })

    test("Static test strong", () => {
        expect(Str.capitalize("caPiTalizE", true)).toBe("Capitalize")
    })

    test("Class test", () => {
        expect(""+str("capitalize").capitalize()).toBe("Capitalize")
    })

    test("Class test strong", () => {
        expect(""+str("caPiTalizE").capitalize(true)).toBe("Capitalize")
    })
})


