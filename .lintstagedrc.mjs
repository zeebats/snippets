export default {
	'*.*': filenames => [`case-police  --fix ${filenames.join(' ')}`],
	'*.{js,json,mjs,ts}': filenames => [`eslint ${filenames.join(' ')}`],
};
