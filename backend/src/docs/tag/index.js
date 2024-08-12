import { getAllTags } from './getAllTags.doc.js';
import { getTags } from './getTags.doc.js';

export const tagDocumentation = {
	'/api/v1/tags': {
		...getTags,
	},
	'/api/v1/tags/getAll': {
		...getAllTags,
	},
};
