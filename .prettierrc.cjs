module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'es5',
	endOfLine: 'auto',
	tabWidth: 2,
	bracketSameLine: true,
	printWidth: 100,
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
};
