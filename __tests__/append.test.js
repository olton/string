import {describe, test, expect} from "vitest";
import {append} from "../src/plugins/append.js";
import {Str, str} from "../src/index.js"

describe("Test append function", () => {
    test("Function test", () => {
        expect(append("12345", "0", 5)).toBe("1234500000")
    })

    test("Static test", () => {
        expect(Str.append("12345", "0", 5)).toBe("1234500000")
    })

    test("Class test", () => {
        expect(""+str("12345").append("0", 5)).toBe("1234500000")
    })
})


