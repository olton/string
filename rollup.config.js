import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default [
    {
        input: 'src/browser.js',
        output: [
            {
                file: 'lib/string.js',
                format: 'iife',
                name: "",
                plugins: [
                ]
            },
            {
                file: 'lib/string.min.js',
                format: 'iife',
                name: "",
                plugins: [
                    terser()
                ]
            }
        ]
    },
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/string.js',
                format: 'esm',
            }
        ],
        plugins: [
            commonjs(),
            babel({ babelHelpers: 'bundled' })
        ]
    }
]