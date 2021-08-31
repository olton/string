module.exports = function (wallaby) {
    return {
        files: [
            'src/*.js',
            'src/plugins/*.js',
            'src/i18n/*.js',
            'src/core/*.js',
        ],

        tests: [
            '__tests__/**/*.js'
        ],

        env: {
            type: 'node'
        },

        testFramework: 'jest'
    };
};
