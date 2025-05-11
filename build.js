import {build, context} from "esbuild"
import progress from "@olton/esbuild-plugin-progress"
import { replace } from "esbuild-plugin-replace";
import pkg from "./package.json" with {type: "json"};

const production = process.env.MODE === "production"
const version = pkg.version
const banner = `
/*!
 * String v${version} (@olton/string)
 * Copyright ${new Date().getFullYear()} by Serhii Pimenov
 * Built: ${new Date().toLocaleString()}
 * Licensed under MIT
 */
`

const options = {
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: production,
    sourcemap: false,
    outfile: "dist/string.js",
    format: "esm",
    banner: {
        js: banner
    },
    plugins: [
        progress({
            text: 'Building String...',
            succeedText: `Built successfully in %s ms!`
        }),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': version,
        })
    ]
}

if (production) {
    await build({
        ...options,
    }).catch(() => process.exit(1))
} else {
    const ctxNpm = await context({
        ...options,
    })
    
    await Promise.all([
        ctxNpm.watch(), 
    ]).catch(() => process.exit(1))
}