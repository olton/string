import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import progress from 'rollup-plugin-progress';

export default [
    {
        input: 'src/browser.js',
        plugins: [
            progress(),
            nodeResolve({
                browser: true
            }),
            commonjs(),
        ],
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
        plugins: [
            progress(),
            nodeResolve({
                browser: true
            }),
            commonjs(),
        ],
        output: [
            {
                file: 'dist/string.js',
                format: 'esm',
            }
        ],
    }
]