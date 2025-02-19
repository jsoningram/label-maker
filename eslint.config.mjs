import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // Ensure ESLint supports modern JavaScript
        sourceType: "module", // Set to "module" for ES modules
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules, // Disable conflicting ESLint rules
      "prettier/prettier": "error", // Run Prettier as an ESLint rule
    },
  },
];

export default eslintConfig;
