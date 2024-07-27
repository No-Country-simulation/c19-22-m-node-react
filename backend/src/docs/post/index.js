import { createComment } from './createComment.doc.js';
import { createLike } from './createLike.doc.js';
import { createPost } from './createPost.doc.js';
import { deleteComment } from './deleteComment.doc.js';
import { deleteLike } from './deleteLike.doc.js';
import { getPost } from './getPost.doc.js';
import { getPosts } from './getPosts.doc.js';

export const postDocumentation = {
	'/api/v1/posts': {
		...createPost,
		...getPosts,
	},
	'/api/v1/posts/comment/{postId}': {
		...createComment,
	},
	'/api/v1/posts/comment/{commentId}': {
		...deleteComment,
	},
	'/api/v1/posts/like/{postId}': {
		...createLike,
		...deleteLike,
	},
	'/api/v1/posts/{id}': {
		...getPost,
	},
};
