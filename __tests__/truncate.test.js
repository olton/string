import {truncate, truncateWithAlign} from "../src/plugins/truncate.js";
import {Str, str} from "../src/index.js"

describe("Test truncate function", () => {
    it("truncate()", () => {
        expect(truncate("1234567890", 5)).toBe("12345...")
    })

    it("truncateWithAlign()", () => {
        expect(truncateWithAlign("123 abcd efg", 5)).toBe("123...")
    })
})

