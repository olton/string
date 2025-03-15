import {describe, it, expect} from "@olton/latte";
import { capitalize } from "../src/index.js";

describe("Test capitalize()", () => {
    it("capitalize('hello world') should be 'Hello world'", () => {
        expect(capitalize('hello world')).toBe('Hello world')
    })
})