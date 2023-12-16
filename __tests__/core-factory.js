import {describe, test, expect, assert} from "vitest";
import {str, Str} from "../src/index.js";

describe('Test factory str()', () => {
    test('Should return a instance of Str ', () => {
        assert.strictEqual(str() instanceof Str, true);
    });
    test('Should return a str ', () => {
        expect(str("str").val()).toBe("str");
    });
    test('Should return a str ', () => {
        expect(str().val("str").val()).toBe("str");
    });
    test('Should return a 123 ', () => {
        expect(str(123).val()).toBe("123");
    });
    test('Should return a 1,2,3 from [1, 2, 3] ', () => {
        expect(str([1, 2, 3]).val()).toBe("1,2,3");
    });
});