import assert from "assert";
import {Str} from "../src/index.js";

describe('Test creating instance of Str()', () => {
    it ('Should return a instance of Str ', () => {
        assert.strictEqual(new Str() instanceof Str, true);
    });
    it ('Should return a value str ', () => {
        assert.strictEqual((new Str("str")).val() === "str", true);
    });
    it ('Should return a value str ', () => {
        assert.strictEqual((new Str()).val("str").val() === "str", true);
    });
});
