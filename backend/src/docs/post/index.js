import { createPost } from './createPost.doc.js';
import { getPost } from './getPost.doc.js';
import { getPosts } from './getPosts.doc.js';

export const postDocumentation = {
	'/api/v1/posts': {
		...createPost,
		...getPosts,
	},
	'/api/v1/posts/{id}': {
		...getPost,
	},
};
