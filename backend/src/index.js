import express from 'express';
import fileUpload from 'express-fileupload';
import AppDataSource from './config/db';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: '/tmp/',
		createParentPath: true,
	}),
);

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

AppDataSource.initialize()
	.then(() => {
		console.log('Connected to the database!');

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => console.log('Error connecting to the database:', error));
