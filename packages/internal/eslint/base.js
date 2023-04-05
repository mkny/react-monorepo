const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "env": {
    "jest": true,
    "browser": true,
    "node": true,
    "es2020": true
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  "settings": {
    "import/internal-regex": "^(assets|common|components|hooks)/",
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": isDev ? "warn" : "error",
    "@typescript-eslint/no-use-before-define": ["error"],
    "prettier/prettier": "error",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-template": "error",
    "complexity": ["error", 5],
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../../", "../../", "./../../../"],
      },
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "no-console": isDev ? "warn" : "error",
    "no-restricted-imports": ["error", {
      "patterns": ["*.svg", "*.png"]
    }],
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-empty-pattern": "warn",
        "@typescript-eslint/ban-types": "warn"
      }
    }
  ],
  "ignorePatterns": ["lib", "dist", "build", "android", "node_modules"]
}
