module.exports = {
	env: {
		es6: true,
		node: true,
		browser: true,
		commonjs: true
	},
	extends: 'eslint:recommended',
	parser: 'babel-eslint', //
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'no-const-assign': 1,
		'no-extra-semi': 0,
		'no-fallthrough': 0,
		'no-empty': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-redeclare': 0,
		'no-this-before-super': 1,
		'no-undef': 1,
		'no-unreachable': 1,
		'no-use-before-define': 0,
		'constructor-super': 1,
		curly: 0,
		eqeqeq: 0,
		'func-names': 0,
		'valid-typeof': 1
	}
};
