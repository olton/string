import {describe, test, expect} from "vitest";
import {truncate, truncateWithAlign} from "../src/plugins/truncate.js";
import {Str, str} from "../src/index.js"

describe("Test truncate function", () => {
    test("truncate()", () => {
        expect(truncate("1234567890", 5)).toBe("12345...")
    })

    test("truncateWithAlign()", () => {
        expect(truncateWithAlign("123 abcd efg", 5)).toBe("123...")
    })
})

