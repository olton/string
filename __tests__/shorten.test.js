import {describe, test, expect} from "vitest";
import {shorten} from "../src/plugins/shorten.js";
import {Str, str} from "../src/index.js"

describe("Test shorten function", () => {
    test("Function test", () => {
        expect(shorten("1234567890", 5)).toBe("12345...67890")
    })

    test("Static test", () => {
        expect(Str.shorten("1234567890", 5)).toBe("12345...67890")
    })

    test("Class test", () => {
        expect(""+str("1234567890").shorten(5)).toBe("12345...67890")
    })
})

