const ERROR = 2;
const OFF = 0;
const basicConfig = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of ReactJS
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  // plugins vs extends: https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'jest',
    'jest-dom',
    'testing-library',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier', // override other formatting configs to avoid conflicts.
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: [ERROR, 'always'],
  },
  overrides: [
    {
      // TypeScript specific configurations
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        // upgrade setting for v8 https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
      ],
      rules: {
        // React.FunctionComponent (or the shorthand React.FC) is discouraged.
        // https://github.com/typescript-cheatsheets/react#function-components
        // https://github.com/facebook/create-react-app/pull/8177
        // https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF, // sometimes we need to use ! to mark variable will never be undefined, avoid TS errors like: the Type 'number | undefined' is not assignable to type 'number', https://github.com/bobbyquennell/leetcode/blob/a7a3ac69fc686d136007b46810532b139e148300/src/twoSum/index.ts#L54
      },
    },
    {
      files: ['**/__tests__/**/*.{js,ts,tsx}', '**/*.@(spec|test).{js,ts,tsx}'],
      env: {
        'jest/globals': true,
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'jest/expect-expect': 'off',
        'jest/prefer-strict-equal': 'off',
        'no-use-before-define': 'off',

        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-done-callback': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-to-be-null': 'warn',
        'jest/prefer-to-be-undefined': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-spy-on': 'error',
        'jest/valid-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/prefer-todo': 'error',
        'jest/valid-title': 'error',
      },
    },
  ],
};
module.exports = basicConfig;
