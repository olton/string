import {describe, it, expect} from "@olton/latte";
import {
    isAlpha,
    isDigit,
    isAlphaDigit,
    isBlank,
    isEmpty,
    isLower,
    isUpper,
    isString,
    startsWith,
    endsWith,
    includes,
    matches
} from "../src/index.js";

describe("Test boolean-returning functions", () => {
    it("isAlpha() should check if string contains only letters", () => {
        expect(isAlpha("hello")).toBeTrue();
        expect(isAlpha("hello123")).toBeFalse();
        expect(isAlpha("hello world")).toBeFalse();
    });

    it("isDigit() should check if string contains only digits", () => {
        expect(isDigit("123")).toBeTrue();
        expect(isDigit("123a")).toBeFalse();
        expect(isDigit("")).toBeFalse();
    });

    it("isAlphaDigit() should check if string contains only letters and digits", () => {
        expect(isAlphaDigit("hello123")).toBeTrue();
        expect(isAlphaDigit("hello 123")).toBeFalse();
        expect(isAlphaDigit("hello_123")).toBeFalse();
    });

    it("isBlank() should check if string is blank", () => {
        expect(isBlank("")).toBeTrue();
        expect(isBlank(" ", false)).toBeTrue();
        expect(isBlank("  ", false)).toBeTrue();
        expect(isBlank("hello")).toBeFalse();
    });

    it("isEmpty() should check if string is empty", () => {
        expect(isEmpty("")).toBeTrue();
        expect(isEmpty(" ")).toBeTrue();
        expect(isEmpty("  ")).toBeTrue();
        expect(isEmpty("hello")).toBeFalse();
    });

    it("isLower() should check if string is lowercase", () => {
        expect(isLower("hello")).toBeTrue();
        expect(isLower("Hello")).toBeFalse();
        expect(isLower("HELLO")).toBeFalse();
    });

    it("isUpper() should check if string is uppercase", () => {
        expect(isUpper("HELLO")).toBeTrue();
        expect(isUpper("Hello")).toBeFalse();
        expect(isUpper("hello")).toBeFalse();
    });

    it("isString() should check if value is a string", () => {
        expect(isString("hello")).toBeTrue();
        expect(isString(123)).toBeFalse();
        expect(isString(null)).toBeFalse();
        expect(isString(undefined)).toBeFalse();
        expect(isString({})).toBeFalse();
        expect(isString([])).toBeFalse();
    });

    it("startsWith() should check if string starts with substring", () => {
        expect(startsWith("hello world", "hello")).toBeTrue();
        expect(startsWith("hello world", "world")).toBeFalse();
    });

    it("endsWith() should check if string ends with substring", () => {
        expect(endsWith("hello world", "world")).toBeTrue();
        expect(endsWith("hello world", "hello")).toBeFalse();
    });

    it("includes() should check if string includes substring", () => {
        expect(includes("hello world", "lo wo")).toBeTrue();
        expect(includes("hello world", "foo")).toBeFalse();
    });

    it("matches() should check if string matches pattern", () => {
        expect(matches("hello", /^h.*o$/)).toBeTrue();
        expect(matches("hello", /^world$/)).toBeFalse();
    });
});
