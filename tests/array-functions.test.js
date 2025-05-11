import {describe, it, expect} from "@olton/latte";
import {
    chars,
    words,
    split,
    unique,
    uniqueWords
} from "../src/index.js";

describe("Test array-returning functions", () => {
    it("chars() should return array of characters", () => {
        const result = chars("hello");
        expect(result).toBeArray();
        expect(result).toBeArrayEqual(['h', 'e', 'l', 'l', 'o']);
        expect(chars("")).toBeEmpty();
    });

    it("chars() with ignore parameter should ignore specified characters", () => {
        const result = chars("hello world", [' ']);
        expect(result).toBeArray();
        expect(result).toBeArrayEqual(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']);
    });

    it("words() should return array of words", () => {
        const result = words("hello world");
        expect(result).toBeArray();
        expect(result).toBeArrayEqual(['hello', 'world']);
        expect(words("")).toBeEmpty();
    });

    it("split() should split string into array", () => {
        const result = split("hello,world", ",");
        expect(result).toBeArray();
        expect(result).toBeArrayEqual(['hello', 'world']);
    });

    it("split() with limit should limit the result", () => {
        const result = split("hello,world,test", ",", 2);
        expect(result).toBeArray();
        expect(result).toBeArrayEqual(['hello', 'world']);
    });

    it("unique() should return string of unique characters", () => {
        const result = unique("hello");
        expect(result).toBe("helo");
    });

    it("uniqueWords() should return string of unique words", () => {
        const result = uniqueWords("hello world hello");
        expect(result).toBe("helloworld");
    });
});
