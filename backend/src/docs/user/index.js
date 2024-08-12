import { createProfile } from './createProfile.doc.js';
import { login } from './login.doc.js';
import { profile } from './profile.doc.js';
import { register } from './register.doc.js';

const pathUser = '/api/v1/users';

export const userDocumentation = {
	[`${pathUser}/register`]: {
		...register,
	},
	[`${pathUser}/login`]: {
		...login,
	},
	[`${pathUser}/profile`]: {
		...profile,
		...createProfile,
	},
};
