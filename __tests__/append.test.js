import {describe, it, expect} from "@olton/latte";
import { append } from "../src/index.js";

describe("Test append()", () => {
    it("append('Hello', ' ', 5) should be 'Hello     '", () => {
        expect(append('Hello', ' ', 5)).toBe('Hello     ')
    })
})