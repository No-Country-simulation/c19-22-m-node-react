import { configComponents } from './components/index.js';
import { config } from './config.js';
import { postDocumentation } from './post/index.js';
import { tagDocumentation } from './tag/index.js';
import { userDocumentation } from './user/index.js';

const swaggerConfig = {
	...config,
	...configComponents,
	paths: {
		...userDocumentation,
		...postDocumentation,
		...tagDocumentation,
	},
};

export default swaggerConfig;
