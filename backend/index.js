import express from 'express';
import AppDataSource from './src/config/db.js';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';
import tagRoutes from './src/routes/tag.routes.js';
import swaggerUI from 'swagger-ui-express';
import swaggerConfig from './src/docs/index.js';
import fileUpload from 'express-fileupload';
import { handleError } from './src/middleware/handleError.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: '/tmp/',
		createParentPath: true,
	}),
);

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/tags', tagRoutes);
app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
app.use(handleError);

AppDataSource.initialize()
	.then(() => {
		console.log('Connected to the database!');

		app.listen(port, () => {
			console.log(`Documentacion disponible en /v1/api-docs`);
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => console.log('Error connecting to the database:', error));
