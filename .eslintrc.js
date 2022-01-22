module.exports = {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // 'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'max-len': ['error', { 'code': 140, 'tabWidth': 2 }],
    'default-param-last': ['error'],
    'eqeqeq': ['error', 'always'],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'prefer-arrow-callback': ['warn'],
    'no-var': ['error'],
    'no-useless-rename': ['error'],
    // 'space-before-function-paren': ['error', 'never'],
    'semi-style': ['error', 'last'],
    'semi': 'off', // Handled in TS rules
    'indent': 'off', // Handled in TS tules
    'quotes': 'off', // Handled in TS
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-var': 'error',
    'no-console': 'error',
    // Turned off in favour of TS provided no-unused-vars
    'no-unused-vars': 'off',
    'no-restricted-imports': ['error', {
      'patterns': [{
        'group': ['@ak/ccl/*/*', '!@ak/ccl/*'],
        'message': '\nAvoid deeply nested ccl imports, use `@ak/ccl/<ModuleName>` only',
      }],
    }],

    // TS
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      caughtErrorsIgnorePattern: '^_',
    }],
    '@typescript-eslint/array-type': ['error', { 'array-simple': true }],
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'typeLike', // class, interface, typeAlias, enum, typeParameter
      format: ['PascalCase'],
    }, {
      selector: ['enum', 'enumMember'],
      format: ['PascalCase', 'UPPER_CASE'],
    }, {
      selector: 'objectLiteralProperty',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allowSingleOrDouble',
    }, {
      selector: 'objectLiteralProperty',
      format: null,
      filter: {
        regex: '^[A-Z]|[- ]',
        match: true,
      }
    }, {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false
      }
    }],
    '@typescript-eslint/quotes': ['error', 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true,
    }],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // React
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    /*'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/no-array-index-key': ['warn'],
    'react/no-did-mount-set-state': ['warn'],
    'react/no-multi-comp': ['warn', { 'ignoreStateless': true }],
    'react/no-typos': ['warn'],
    'react/no-unstable-nested-components': ['warn', { 'allowAsProps': true }],
    'react/no-unused-state': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/void-dom-elements-no-children': ['warn'],
    'react/style-prop-object': ['error'],
    // react/sort-comp
    // react/jsx-handler-names
    'react/self-closing-comp': ['warn'], /* { 'component': true, 'html': true } *
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': ['off', { props: 'never', children: 'never' }],
    'react/jsx-curly-newline': ['warn', 'consistent'],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    // 'react/jsx-indent-props': ['warn', 2]
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-comment-textnodes': 'warn',
    // react/jsx-no-literals => for i18n
    'react/jsx-no-script-url': 'warn',
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/jsx-pascal-case': ['warn'],
    'react/jsx-props-no-multi-spaces': 'warn',
    // react/jsx-sort-props
    'react/jsx-space-before-closing': ['warn', 'always'], */

  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  }
};
