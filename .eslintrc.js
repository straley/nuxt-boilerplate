module.exports = {
  plugins: [
    '@typescript-eslint',
    'filenames',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs',
    'strict',
  ],
  rules: {
    'id-blacklist': 'off',
    'id-length': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'comma-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-extra-semi': 'error',
    'semi': ['warn', 'never'],
    'array-element-newline': 'off',
    'array-bracket-newline': 'off',
    'filenames/match-exported': 'off',
    'filenames/no-index': 'off',
    'filenames/match-regex': [
      'error', 
      '^[a-z]{1}[a-z0-9]*(-[a-z]{1}[a-z0-9]*)*(\.?[a-z0-9])*$', 
      true
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'template-curly-spacing': 'off',
    'no-console': 'warn',
    'func-style': [
      'error', 
      'declaration', 
      {allowArrowFunctions: true}
    ],
    'arrow-parens': 'off',
    'no-magic-numbers': 'off',
    'no-undefined': 'warn',
    'no-confusing-arrow': 'off',
    'line-comment-position': 'warn',
    'no-inline-comments': 'warn',
    'no-nested-ternary': 'off',
    'operator-linebreak': 'off',
    'no-new': 'off',
    'linebreak-style': 'off',
    'no-warning-comments': 'warn',

    // these should be handled in prettier
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off'
  },
  overrides: [
    {
      files: [
        '*.vue'
      ],
      'rules': {
        'filenames/match-regex': [
          'error', 
          '^[A-Za-z]{1}[A-Za-z0-9\-\_]*', 
          true
        ],
      },
    },
    {
      files: [
        'server/index.ts',
      ],
      'rules': {
        'strict': 'off',
        'no-process-env': 'off',
        'global-require': 'off',
      }
    },
    {
      files: [
        'test/*.spec.js',
      ],
      'rules': {
        'filenames/match-regex': [
          'error', 
          '^[A-Za-z]{1}[A-Za-z0-9\-\_]*', 
          true
        ],
      }
    }
  ],
};