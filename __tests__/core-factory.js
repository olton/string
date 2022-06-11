import assert from "assert";
import {str, Str} from "../src/index.js";

describe('Test factory str()', () => {
    it ('Should return a instance of Str ', () => {
        assert.strictEqual(str() instanceof Str, true);
    });
    it ('Should return a str ', () => {
        expect(str("str").val()).toBe("str");
    });
    it ('Should return a str ', () => {
        expect(str().val("str").val()).toBe("str");
    });
    it ('Should return a 123 ', () => {
        expect(str(123).val()).toBe("123");
    });
    it ('Should return a 1,2,3 from [1, 2, 3] ', () => {
        expect(str([1, 2, 3]).val()).toBe("1,2,3");
    });
});