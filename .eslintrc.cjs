/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "@vitest/eslint-plugin",
    "import",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  overrides: [
    {
      files: ["*.ts"],
    },
  ],
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "no-undef": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "_" }],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
