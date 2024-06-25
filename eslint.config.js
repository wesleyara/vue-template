import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  eslintConfigPrettier,
  {
    files: ["**/*.vue"],
    plugins: {
      "typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".vue"],
        sourceType: "module",
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      "vue/no-parsing-error": "off",
    },
  },
  {
    ignores: ["node_modules", "dist", "public", ".nuxt"],
  },
];
