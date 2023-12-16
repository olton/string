import {describe, test, expect, assert} from "vitest";
import {Str} from "../src/index.js";

describe('Test creating instance of Str()', () => {
    test('Should return a instance of Str ', () => {
        assert.strictEqual(new Str() instanceof Str, true);
    });
    test('Should return a value str ', () => {
        assert.strictEqual((new Str("str")).val() === "str", true);
    });
    test('Should return a value str ', () => {
        assert.strictEqual((new Str()).val("str").val() === "str", true);
    });
});
