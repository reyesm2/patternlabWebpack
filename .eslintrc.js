module.exports = {
    env: {
      commonjs: true,
      node: true,
      browser: true,
    },
    extends: ["eslint:recommended"],
    globals: {},
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
    },
    ignorePatterns: ["node_modules/"],
    rules: {
        "arrow-body-style": [
          "error", 
          "always"
        ],
        "no-duplicate-imports": "error",
        "no-var": "error",
        "sort-imports": "error",
        "spaced-comment": [
          "error", 
          "always"
        ]
    }
  };