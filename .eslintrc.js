const {
	compilerOptions: {paths},
} = require('./tsconfig.json');

const aliasesImportGroups = Object.keys(paths).reduce((ret, pathKey) => {
	const regexEndStar = new RegExp(/\/\*$/);
	const key = pathKey.replace(regexEndStar, '');
	const val = `/^${key}/`;
	if (!ret.includes(val)) ret.push(val);
	return ret;
}, []);

module.exports = {
	env: {
		es6: true,
	},
	extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
	plugins: ['eslint-plugin-import-helpers', 'react', 'react-hooks'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'class-methods-use-this': 0,
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
				leadingUnderscore: 'allow',
			},
		],
		'@typescript-eslint/indent': 0,
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		// 'import/newline-after-import': 1,
		'react/jsx-curly-newline': 1,
		'react/jsx-closing-bracket-location': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'react/jsx-props-no-spreading': [
			1,
			{
				html: 'enforce',
				custom: 'enforce',
				explicitSpread: 'enforce',
				exceptions: ['Image', 'img'],
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/jsx-wrap-multilines': [
			2,
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'ignore',
				condition: 'ignore',
				logical: 'ignore',
				prop: 'ignore',
			},
		],
		'react/destructuring-assignment': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': 0,
		'react/jsx-boolean-value': 0,
		'react/jsx-closing-tag-location': 0,
		'react/jsx-closing-bracket-location': [
			2,
			{
				selfClosing: 'tag-aligned',
				nonEmpty: 'after-props',
			},
		],
		'react/button-has-type': 0,
		'react/prop-types': 0,
		'react/button-has-type': 0,
		'react/jsx-tag-spacing': [
			2,
			{
				beforeSelfClosing: 'always',
			},
		],
		'@typescript-eslint/no-explicit-any': 2,
		'@typescript-eslint/no-unused-vars': 1,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'react-hooks/exhaustive-deps': 0,
		'consistent-return': 1,
		'default-case': 0,
		'@typescript-eslint/dot-notation': 0,
		'@typescript-eslint/lines-between-class-members': 0,
		'no-unused-vars': 0,
		'no-nested-ternary': 0,
		'no-shadow': 0,
		'no-unreachable': 1,
		'no-console': [1, {allow: ['info']}],
		'import-helpers/order-imports': [
			1,
			{
				newlinesBetween: 'always',
				groups: [
					['/^react$/'],
					['/^react/', 'module', 'absolute'],
					aliasesImportGroups,
					['parent', 'index', 'sibling'],
				],
				alphabetize: {order: 'asc', ignoreCase: true},
			},
		],
	},
};
