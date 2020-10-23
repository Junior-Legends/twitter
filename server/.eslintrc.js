module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		commonjs: true,
		es2020: true,
		node: true,
	},
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 11,
	},
	rules: {
		'no-underscore-dangle': 'off',
		'no-console': 'off',
	},
};
