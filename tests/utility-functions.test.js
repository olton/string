import {describe, it, expect} from "@olton/latte";
import {
    pad,
    lpad,
    rpad,
    trim,
    ltrim,
    rtrim,
    insert,
    strip,
    repeat,
    append,
    prepend,
    wrap,
    wrapTag,
    escapeHtml,
    unescapeHtml,
    truncate,
    prune,
    shorten
} from "../src/index.js";

describe("Test string utility functions", () => {
    it("pad() should pad string on both sides", () => {
        expect(pad("hello", "*", 9)).toBe("**hello**");
        expect(pad("hello", "*", 10)).toBe("**hello***");
    });

    it("lpad() should pad string on left side", () => {
        expect(lpad("hello", "*", 7)).toBe("**hello");
        expect(lpad("hello", "*", 10)).toBe("*****hello");
    });

    it("rpad() should pad string on right side", () => {
        expect(rpad("hello", "*", 7)).toBe("hello**");
        expect(rpad("hello", "*", 10)).toBe("hello*****");
    });

    it("trim() should trim whitespace from both sides", () => {
        expect(trim("  hello  ")).toBe("hello");
        expect(trim("  hello world  ")).toBe("hello world");
    });

    it("ltrim() should trim whitespace from left side", () => {
        expect(ltrim("  hello  ")).toBe("hello  ");
    });

    it("rtrim() should trim whitespace from right side", () => {
        expect(rtrim("  hello  ")).toBe("  hello");
    });

    it("insert() should insert string at position", () => {
        expect(insert("hello", "world", 3)).toBe("helworldlo");
    });

    it("strip() should remove substring from string", () => {
        expect(strip("hello world", "world")).toBe("hello ");
        expect(strip("hello world", "world", "")).toBe("hello ");
        expect(strip("hello world", "world", "universe")).toBe("hello universe");
    });

    it("repeat() should repeat string n times", () => {
        expect(repeat("hello", 3)).toBe("hellohellohello");
        expect(repeat("hello", 0)).toBe("");
    });

    it("append() should append string to end", () => {
        expect(append("hello", " world")).toBe("hello world");
        expect(append("hello", " world", 2)).toBe("hello world world");
    });

    it("prepend() should prepend string to beginning", () => {
        expect(prepend("world", "hello ")).toBe("hello world");
        expect(prepend("world", "hello ", 2)).toBe("hello hello world");
    });

    it("wrap() should wrap string with before and after", () => {
        expect(wrap("hello", "[", "]")).toBe("[hello]");
        expect(wrap("hello", "<b>", "</b>")).toBe("<b>hello</b>");
    });

    it("wrapTag() should wrap string with HTML tag", () => {
        expect(wrapTag("hello", "b")).toBe("<b>hello</b>");
        expect(wrapTag("hello", "div")).toBe("<div>hello</div>");
    });

    it("escapeHtml() should escape HTML special characters", () => {
        expect(escapeHtml("<div>hello & world</div>")).toBe("&lt;div&gt;hello &amp; world&lt;/div&gt;");
    });

    it("unescapeHtml() should unescape HTML special characters", () => {
        expect(unescapeHtml("&lt;div&gt;hello &amp; world&lt;/div&gt;")).toBe("<div>hello & world</div>");
    });

    it("truncate() should truncate string to length", () => {
        expect(truncate("hello world", 5)).toBe("hello...");
        expect(truncate("hello world", 5, "!")).toBe("hello!");
    });

    it("prune() should truncate string at word boundary", () => {
        expect(prune("hello world", 8, "...")).toBe("hello...");
        expect(prune("hello world", 12)).toBe("hello world");
    });

    it("shorten() should shorten string with ellipsis in middle", () => {
        expect(shorten("hello world", 3)).toBe("hel...rld");
        expect(shorten("hello world", 3, "-")).toBe("hel-rld");
    });
});
