/** @type { import('eslint').ESLint.ConfigData } */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['packages/core/**'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
      extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
      plugins: ['vue', '@typescript-eslint'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-mutating-props': 'off'
      },
    },
  ],
}
