module.exports = {
	env: {
		commonjs: true,
		es2020: true,
		node: true,
	},
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 11,
	},
	rules: {
		'no-underscore-dangle': 'off',
		'no-console': 'off',
	},
};
