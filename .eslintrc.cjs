module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'warn',
    'space-before-function-paren': 'off'
  },
  globals: {
    // 這裡是添加 Cypress 到全域變數中
    Cypress: 'readonly',
    cy: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly',
    expect: 'readonly'
  }
}
