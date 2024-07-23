import { createPost } from './createPost.doc.js';
import { getPost } from './getPost.doc.js';

export const postDocumentation = {
	'/api/v1/posts': {
		...createPost,
		...getPost,
	},
};
