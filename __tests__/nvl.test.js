import {describe, it, expect} from "@olton/latte";
import { nvl } from "../src/index.js";

describe("Test nvl()", () => {
    it("nvl('Hello', 'World') should be 'Hello'", () => {
        expect(nvl('Hello', 'World')).toBe('Hello')
    })
    it("nvl(undefined, 'World') should be 'World'", () => {
        expect(nvl(undefined, 'World')).toBe('World')
    })
    it("nvl(null, 'World') should be 'World'", () => {
        expect(nvl(null, 'World')).toBe('World')
    })
    it("nvl(0, 'World') should be 0", () => {
        expect(nvl(0, 'World')).toBe(0)
    })
    it("nvl(false, 'World') should be 0", () => {
        expect(nvl(false, 'World')).toBeFalse()
    })
    it("nvl(true, 'World') should be 0", () => {
        expect(nvl(true, 'World')).toBeTrue()
    })
    it("nvl('', 'World') should be ''", () => {
        expect(nvl('', 'World')).toBe('')
    })
    it("nvl(null, null, 'third') should be 'third'", () => {
        expect(nvl(null, null, 'third')).toBe('third')
    })
})