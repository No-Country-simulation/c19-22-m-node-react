import { createPostSchema } from './createPost.schema.js';
import { createProfileSchema } from './createProfile.schema.js';
import { getPostSchema } from './getPost.schema.js';
import { getPostsSchema } from './getPosts.schema.js';
import { loginSchema } from './login.schema.js';
import { registerSchema } from './register.schema.js';
import { responseSchema } from './Response.schema.js';
import { securitySchema } from './security.schema.js';

export const configComponents = {
	components: {
		schemas: {
			login: loginSchema,
			register: registerSchema,
			createPost: createPostSchema,
			getPost: getPostSchema,
			response: responseSchema,
			getPosts: getPostsSchema,
			createProfile: createProfileSchema,
		},
		securitySchemes: {
			...securitySchema,
		},
	},
};
