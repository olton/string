import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default [
    {
        input: 'src/browser.js',
        output: [
            {
                file: 'lib/datetime.js',
                format: 'iife',
                name: "",
                plugins: [
                ]
            },
            {
                file: 'lib/datetime.min.js',
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
                file: 'dist/datetime.js',
                format: 'esm',
            }
        ],
        plugins: [
            commonjs(),
            babel({ babelHelpers: 'bundled' })
        ]
    }
]