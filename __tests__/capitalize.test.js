import {capitalize} from "../src/plugins/capitalize.js";
import {Str, str} from "../src/index.js"

describe("Test capitalize function", () => {
    it("Function test", () => {
        expect(capitalize("capitalize")).toBe("Capitalize")
    })

    it("Function test strong", () => {
        expect(capitalize("caPiTalizE", true)).toBe("Capitalize")
    })

    it("Static test", () => {
        expect(Str.capitalize("capitalize")).toBe("Capitalize")
    })

    it("Static test strong", () => {
        expect(Str.capitalize("caPiTalizE", true)).toBe("Capitalize")
    })

    it("Class test", () => {
        expect(""+str("capitalize").capitalize()).toBe("Capitalize")
    })

    it("Class test strong", () => {
        expect(""+str("caPiTalizE").capitalize(true)).toBe("Capitalize")
    })
})


