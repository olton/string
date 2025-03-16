import {describe, it, expect} from "@olton/latte";
import { camelCase } from "../src/index.js";

describe("Test camelCase()", () => {
    it("camelCase('hello-world') should be 'helloWorld'", () => {
        expect(camelCase('hello-world')).toBe('helloWorld')
    })
    it("camelCase('hello world') should be 'helloWorld'", () => {
        expect(camelCase('hello world')).toBe('helloWorld')
    })
})