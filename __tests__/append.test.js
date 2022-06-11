import {append} from "../src/plugins/append.js";
import {Str, str} from "../src/index.js"

describe("Test append function", () => {
    it("Function test", () => {
        expect(append("12345", "0", 5)).toBe("1234500000")
    })

    it("Static test", () => {
        expect(Str.append("12345", "0", 5)).toBe("1234500000")
    })

    it("Class test", () => {
        expect(""+str("12345").append("0", 5)).toBe("1234500000")
    })
})


