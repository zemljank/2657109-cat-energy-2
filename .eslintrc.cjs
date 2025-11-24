module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  ignorePatterns: [
    "gulpfile.js",
    "svgo.config.js",
    "postcss.config.js",
    "build/",
    "vendor/",
    "node_modules/",
    "raw/"
  ],
  rules: {},
};
