import { createPostSchema } from './createPost.schema.js';
import { getPostSchema } from './getPost.schema.js';
import { loginSchema } from './login.schema.js';
import { registerSchema } from './register.schema.js';
import { securitySchema } from './security.schema.js';

export const configComponents = {
	components: {
		schemas: {
			login: loginSchema,
			register: registerSchema,
			createPost: createPostSchema,
			getPost: getPostSchema,
		},
		securitySchemes: {
			...securitySchema,
		},
	},
};
