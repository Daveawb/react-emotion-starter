module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['plugin:testcafe/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/ban-types': 0,
        'react/prop-types': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: ['testcafe'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
