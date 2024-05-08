import terser from '@rollup/plugin-terser'
import progress from 'rollup-plugin-progress';
import pkg from "./package.json" assert {type: "json"}
import fs from "node:fs"

const production = process.env.MODE === 'production',
    sourcemap = !production

const banner = `
/*!
 * String - String routines
 * Copyright ${new Date().getFullYear()} by Serhii Pimenov
 * Licensed under MIT
 !*/
`

let txt

txt = fs.readFileSync(`src/browser.js`, 'utf8')
txt = txt.replace(/version = ".+"/g, `version = "${pkg.version}"`)
txt = txt.replace(/build_time = ".+"/g, `build_time = "${new Date().toLocaleString()}"`)
fs.writeFileSync(`src/browser.js`, txt, { encoding: 'utf8', flag: 'w+' })

txt = fs.readFileSync(`src/index.js`, 'utf8')
txt = txt.replace(/version = ".+"/g, `version = "${pkg.version}"`)
txt = txt.replace(/build_time = ".+"/g, `build_time = "${new Date().toLocaleString()}"`)
fs.writeFileSync(`src/index.js`, txt, { encoding: 'utf8', flag: 'w+' })


export default [
    {
        input: 'src/browser.js',
        plugins: [
            progress(),
        ],
        output: [
            {
                file: 'lib/string.js',
                format: 'iife',
                name: "",
                banner,
                plugins: [
                    production && terser({
                        keep_fnames: true,
                        keep_classnames: true
                    })
                ]
            },
        ]
    },
    {
        input: 'src/index.js',
        plugins: [
            progress(),
        ],
        output: [
            {
                file: 'dist/string.cjs.js',
                format: 'esm',
                banner,
            },
            {
                file: 'dist/string.es.js',
                format: 'esm',
                banner,
            },
        ],
    }
]