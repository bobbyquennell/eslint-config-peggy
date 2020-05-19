const ERROR = 2;
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
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of ReactJS
    }
  },
  // plugins vs extends: https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint
  plugins: [
    'react',
    'react-hooks'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react
  ],
  rules: {
    semi: [ERROR, 'always'],
  },
  overrides: [
    {
      // TypeScript specific configurations
      files: ['**/*.js', '**/*.jsx'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint'
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ]
    }
  ]
};
module.exports = basicConfig;
