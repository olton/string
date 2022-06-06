import {camelCase} from "../src/plugins/camel_case.js";
import {Str, str} from "../src/index.js"

describe("Test camelcase function", () => {
    it("Function test", () => {
        expect(camelCase("camel-case")).toBe("camelCase")
    })

    it("Static test", () => {
        expect(Str.camelCase("camel-case")).toBe("camelCase")
    })

    it("Class test", () => {
        expect(""+str("camel-case").camelCase()).toBe("camelCase")
    })
})


