module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["standard", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "prettier/prettier": "error",
    "no-debugger": ["warn"],
    "no-regex-spaces": ["error"],
    "no-unsafe-negation": ["error"]
  }
};
