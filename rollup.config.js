import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import glob from 'glob'

function getPlugins() {
    return glob.sync('src/*/*.js', {
        ignore: [
            'src/core/*.js',
            'src/i18n/*.js',
            'src/helpers/*.js',
            'src/*.js',
        ],
    });
}

function getI18N() {
    return glob.sync('src/*/*.js', {
        ignore: [
            'src/core/*.js',
            'src/plugins/*.js',
            'src/helpers/*.js',
            'src/*.js',
        ],
    });
}

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
                file: 'dist/datetime.cjs.js',
                format: 'cjs',
            },
            {
                file: 'dist/es/datetime.esm.js',
                format: 'es'
            },
        ],
        plugins: [
            commonjs(),
            babel({ babelHelpers: 'bundled' })
        ]
    },
    {
        input: getPlugins(),
        output: {
            dir: 'dist/es/plugins',
            format: 'es',
            chunkFileNames: '[name].js',
        },
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            commonjs()
        ],
    },
    {
        input: getPlugins(),
        output: {
            dir: 'dist/plugins',
            format: 'cjs',
            chunkFileNames: '[name].js',
        },
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            commonjs()
        ],
    },
    {
        input: getI18N(),
        output: {
            dir: 'dist/es/i18n',
            format: 'es',
            chunkFileNames: '[name].js',
            exports: "default"
        },
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            commonjs()
        ],
    },
    {
        input: getI18N(),
        output: {
            dir: 'dist/i18n',
            format: 'cjs',
            chunkFileNames: '[name].js',
            exports: "default"
        },
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            commonjs()
        ],
    }
]
