import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    extends: [perfectionist.configs["recommended-natural"]],
    files: ["**/*.mjs", "**/*.ts", "**/*.tsx"],
    plugins: {
      import: importPlugin,
      prettier,
    },
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/sort-type-constituents": "off",
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
      "import/no-anonymous-default-export": "off",
      "import/order": "off",
      "no-unused-vars": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: ["^next$", "^next/.+", "^next-.+"],
              groupName: "next",
              selector: "type",
            },
            {
              elementNamePattern: ["^next$", "^next/.+", "^next-.+"],
              groupName: "next",
            },
            {
              elementNamePattern: ["^react$", "^react-.+"],
              groupName: "react",
              selector: "type",
            },
            {
              elementNamePattern: ["^react$", "^react-.+"],
              groupName: "react",
            },
          ],
          groups: [
            ["next", "react"],
            ["value-builtin", "value-external"],
            "value-internal",
            "value-parent",
            ["value-sibling", "value-index"],
            "unknown",
          ],
          type: "natural",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: "^id$",
              groupName: "id",
              selector: "property",
            },
            {
              elementNamePattern: "^key$",
              groupName: "key",
              selector: "property",
            },
          ],
          groups: [
            "key",
            "id",
            "required-index-signature",
            "required-property",
            "optional-index-signature",
            "optional-property",
            "required-method",
            "optional-method",
          ],
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: [
            { elementNamePattern: "^id$", groupName: "id" },
            { elementNamePattern: "^key$", groupName: "key" },
            { elementNamePattern: "^on.+", groupName: "callback" },
          ],
          groups: ["key", "id", "shorthand", "unknown", "callback"],
          type: "natural",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: "^[A-Z][A-Z0-9_]*$",
              groupName: "constants",
              selector: "import",
            },
            {
              elementNamePattern: "^use[A-Z][A-Za-z0-9]*$",
              groupName: "hooks",
              selector: "import",
            },
          ],
          groups: ["constants", "hooks", "unknown", "type-import"],
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: "^id$",
              groupName: "id",
              selector: "property",
            },
            {
              elementNamePattern: "^key$",
              groupName: "key",
              selector: "property",
            },
          ],
          groups: [
            "key",
            "id",
            "required-index-signature",
            "required-property",
            "optional-index-signature",
            "optional-property",
            "required-method",
            "optional-method",
          ],
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: "^id$",
              groupName: "id",
              selector: "property",
            },
            {
              elementNamePattern: "^key$",
              groupName: "key",
              selector: "property",
            },
          ],
          groups: ["key", "id", "property", "method"],
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: ["unknown", "nullish"],
        },
      ],
      "prettier/prettier": "error",
      "react/jsx-sort-props": "off",
      "sort-imports": "off",
      "sort-keys": "off",
    },
    settings: {
      perfectionist: {
        ignoreCase: false,
        type: "natural",
      },
    },
  },
]);
