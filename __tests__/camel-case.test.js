import {describe, test, expect} from "vitest";
import {camelCase} from "../src/plugins/camel_case.js";
import {Str, str} from "../src/index.js"

describe("Test camelcase function", () => {
    test("Function test", () => {
        expect(camelCase("camel-case")).toBe("camelCase")
    })

    test("Static test", () => {
        expect(Str.camelCase("camel-case")).toBe("camelCase")
    })

    test("Class test", () => {
        expect(""+str("camel-case").camelCase()).toBe("camelCase")
    })
})


