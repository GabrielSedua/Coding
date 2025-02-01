module.exports = {
  env: {
    node: true, // This tells ESLint that Node.js globals like `module`, `process`, and `require` are valid.
    browser: true, // This tells ESLint that browser globals are also available.
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    'vue/multi-word-component-names': ['error', {
      'ignores': ['Home', 'About']
    }],
  },
};
