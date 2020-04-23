module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'eslint:recommended',
    ],
    plugins: ['jsx-a11y'],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'no-alert': 'off',
        'no-unused-vars': 'off',
        'max-len': 'off',
        'object-curly-spacing': ['error', 'never'],
        'prefer-destructuring': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'no-underscore-dangle': ['error', {allow: ['__NEXT_DATA__']}],
        'no-script-url': 'off',
        'consistent-return': 'off',
        indent: ['error', 4, {SwitchCase: 1, ignoredNodes: ['TemplateLiteral', 'TemplateLiteral *']}],
        semi: 'error',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/alt-text': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': [2, {caseSensitive: true}],
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'quotes': ['error', 'single'],
        'global-require': 'off',
        'space-in-brackets': 'off',
        'no-plusplus': 'off',
        'flowtype/delimiter-dangle': ['error', 'always-multiline'],
        'no-use-before-define': 'off',
        'func-names': 'off',
        'radix': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'no-trailing-spaces': ['error', { 'ignoreComments': true, 'skipBlankLines': true }],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
        'padded-blocks': 'off',
        'prefer-object-spread': 'off',
    },
    settings: {
    },
    globals: {
        alert: true,
        window: true,
        document: true,
        api: true,
        appVersion: true,
        siteConfig: true,
        envConfig: true,
        iMoneyCode: true
    }
};
