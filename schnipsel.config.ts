import { defineSchnipselConfig } from 'schnipsel';

export default defineSchnipselConfig({
	input: {
		directory: 'src',
		glob: '**/*.md',
	},
	renderers: [
		{
			name: 'vscode',
			options: {
				outputDirectory: 'vscode/snippets',
				scopeResolver: { xml: 'text.xml' },
			},
		},
	],
});
