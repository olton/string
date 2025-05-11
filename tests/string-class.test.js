import {describe, it, expect} from "@olton/latte";
import {str, Str} from "../src/index.js";

describe("Test Str class", () => {
    it("str() should create a new Str instance", () => {
        const s = str("hello");
        expect(typeof s).toBe("object");
        expect(s.value).toBe("hello");
        expect(s.mutable).toBeTrue();
    });

    it("str() with mutable=false should create an immutable Str instance", () => {
        const s = str("hello", false);
        expect(s).toBeDefined();
        expect(s.value).toBe("hello");
        expect(s.mutable).toBeFalse();
    });

    it("Str.toString() should convert to string", () => {
        const s = str("hello");
        expect(s.toString()).toBe("hello");
    });

    it("Str.val() should get/set value", () => {
        const s = str("hello");
        expect(s.val()).toBe("hello");
        s.val("world");
        expect(s.val()).toBe("world");
    });

    it("Str.length should return string length", () => {
        const s = str("hello");
        expect(s.length).toBe(5);
    });

    it("Str.immutable() should set immutability", () => {
        const s = str("hello");
        expect(s.mutable).toBeTrue();
        s.immutable();
        expect(s.mutable).toBeFalse();
    });

    it("Mutable Str methods should modify the instance", () => {
        const s = str("hello");
        s.upper();
        expect(s.val()).toBe("HELLO");
    });

    it("Immutable Str methods should return a new instance", () => {
        const s = str("hello", false);
        const result = s.upper();
        expect(s.val()).toBe("hello");
        expect(result.val()).toBe("HELLO");
    });
});
