import {describe, it, expect} from "@olton/latte";
import {
    camelCase,
    capitalize,
    lower,
    upper,
    kebab,
    snake,
    dashedName,
    title
} from "../src/index.js";

describe("Test string case functions", () => {
    it("camelCase() should convert string to camel case", () => {
        expect(camelCase('hello-world')).toBe('helloWorld');
        expect(camelCase('hello world')).toBe('helloWorld');
        expect(camelCase('HelloWorld')).toBe('helloWorld');
    });

    it("capitalize() should capitalize first letter", () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('HELLO')).toBe('HELLO');
        expect(capitalize('hello world')).toBe('Hello world');
    });

    it("capitalize() with strong=true should lowercase the rest of the string", () => {
        expect(capitalize('hello world', true)).toBe('Hello world');
        expect(capitalize('HELLO WORLD', true)).toBe('Hello world');
    });

    it("lower() should convert string to lowercase", () => {
        expect(lower('HELLO')).toBe('hello');
        expect(lower('Hello World')).toBe('hello world');
    });

    it("upper() should convert string to uppercase", () => {
        expect(upper('hello')).toBe('HELLO');
        expect(upper('Hello World')).toBe('HELLO WORLD');
    });

    it("kebab() should convert string to kebab case", () => {
        expect(kebab('helloWorld')).toBe('hello-world');
        expect(kebab('HelloWorld')).toBe('hello-world');
        expect(kebab('hello world')).toBe('hello-world');
    });

    it("snake() should convert string to snake case", () => {
        expect(snake('helloWorld')).toBe('hello_world');
        expect(snake('HelloWorld')).toBe('hello_world');
        expect(snake('hello world')).toBe('hello_world');
    });

    it("dashedName() should convert string to dashed name", () => {
        expect(dashedName('John Smith')).toBe('john-smith');
        expect(dashedName('JohnSmith')).toBe('john-smith');
    });

    it("title() should convert string to title case", () => {
        expect(title('hello world')).toBe('Hello World');
        expect(title('HELLO WORLD')).toBe('HELLO WORLD');
    });
});
