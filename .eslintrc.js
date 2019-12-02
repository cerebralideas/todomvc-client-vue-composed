module.exports = {
  extends: [
    'plugin:vue/essential', // basic rules for Vue
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'eslint:recommended',
  ],
  ignorePatterns: ['*.css'],
  parserOptions: {
    'ecmaVersion': 2018, // Allows for the parsing of modern ECMAScript features
    'sourceType': 'module',
    'ecmaFeatures': {}
  },
  rules: {
    'indent': 'off',
    'max-len': 'off'
  },
  settings: {}
};
