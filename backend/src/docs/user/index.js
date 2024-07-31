import { login } from './login.doc.js';
import { register } from './register.doc.js';

const pathUser = '/api/v1/users';

export const userDocumentation = {
	[`${pathUser}/register`]: {
		...register,
	},
	[`${pathUser}/login`]: {
		...login,
	},
};
