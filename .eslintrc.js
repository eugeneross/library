module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "prettier"], // extending recommended config and config derived from eslint-config-prettier
  plugins: ["prettier"], // activating esling-plugin-prettier (--fix stuff)
  rules: {
    "prettier/prettier": [
      // customizing prettier rules (unfortunately not many of them are customizable)
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: false
      }
    ],
    eqeqeq: ["error", "always"] // adding some custom ESLint rules
  }
};
