module.exports = {
    "extends": [
      "airbnb",
      "plugin:flowtype/recommended"
    ],
    "parser": "babel-eslint",
    "installedESLint": true,
    "plugins": [
        "react",
        "react-native",
        "flowtype",
    ],
    "rules": {
      "no-use-before-define": 0,
      "prefer-const": 0,
      "import/no-unresolved": 0,
      "no-underscore-dangle": 0,
      "no-return-assign": 0,
      "no-class-assign": 0,
      "arrow-body-style": 0,
      "global-require": 0,
      "react/jsx-boolean-value": 0,
      "no-duplicate-imports": 0,
      "react/prefer-stateless-function": 0,
      "import/no-duplicates": 2,
      "import/newline-after-import": 2,
      "import/namespace": 2,
      "import/imports-first": 2,
      "react/jsx-closing-bracket-location": [2, {
        "nonEmpty": "after-props",
        "selfClosing": "tag-aligned",
      }],
      "react/sort-comp": [2, {
        "order": [
          "static-methods",
          "props",
          "state",
          "everything-else",
          "render"
        ],
      }],
      "no-unused-expressions": [2, {
        "allowShortCircuit": true,
      }],
      "flowtype/boolean-style": [
        2,
        "bool"
      ],
      "flowtype/delimiter-dangle": [
        2,
        "always-multiline"
      ],
      "flowtype/require-parameter-type": [
        2,
        {
          "excludeArrowFunctions": true
        }
      ],
      "flowtype/require-valid-file-annotation": [
        2,
        "always"
      ],
      "flowtype/semi": 2,
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 2,
    }
};
