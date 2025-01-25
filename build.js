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

if (production) {
    await build({
        entryPoints: ["src/index.js"],
        bundle: true,
        minify: true,
        sourcemap: false,
        outfile: "dist/string.js",
        banner: {
            js: banner
        },
        plugins: [
            progress({
                text: 'Building String library for NPM...',
                succeedText: `Built successfully in %s ms!`
            }),
            replace({
                '__BUILD_TIME__': new Date().toLocaleString(),
                '__VERSION__': version,
            })
        ]
    }).catch(() => process.exit(1))

    await build({
        entryPoints: ["src/browser.js"],
        bundle: true,
        minify: true,
        sourcemap: false,
        outfile: "lib/string.js",
        banner: {
            js: banner
        },
        plugins: [
            progress({
                text: 'Building String library for Browser...',
                succeedText: `Built successfully in %s ms!`
            }),
            replace({
                '__BUILD_TIME__': new Date().toLocaleString(),
                '__VERSION__': version,
            })
        ]
    }).catch(() => process.exit(1))
} else {
    const ctxNpm = await context({
        entryPoints: ["src/index.js"],
        bundle: true,
        minify: true,
        sourcemap: true,
        outfile: "dist/string.js",
        banner: {
            js: banner
        },
        plugins: [
            progress({
                text: 'Building String library for NPM...',
                succeedText: `Built successfully in %s ms!`
            }),
            replace({
                '__BUILD_TIME__': new Date().toLocaleString(),
                '__VERSION__': version,
            })
        ]
    })

    const ctxLib = await context({
        entryPoints: ["src/browser.js"],
        bundle: true,
        minify: true,
        sourcemap: true,
        outfile: "lib/string.js",
        banner: {
            js: banner
        },
        plugins: [
            progress({
                text: 'Building String library for Browser...',
                succeedText: `Built successfully in %s ms!`
            }),
            replace({
                '__BUILD_TIME__': new Date().toLocaleString(),
                '__VERSION__': version,
            })
        ]
    })
    
    await Promise.all([ctxNpm.watch(), ctxLib.watch()]).catch(() => process.exit(1))
}