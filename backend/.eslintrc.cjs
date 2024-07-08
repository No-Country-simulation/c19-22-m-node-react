module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
  rules: {
    'prettier/prettier': 'warn',
  },
  ignorePatterns: ['.eslintrc.cjs', '.prettierrc.cjs', 'eslint.config.js']
};