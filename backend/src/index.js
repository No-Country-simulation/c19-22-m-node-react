import express from 'express';
import AppDataSource from './config/db';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
	.then(() => {
		console.log('Connected to the database!');

		// Aquí puedes iniciar tu servidor o cualquier lógica de tu aplicación
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => console.log('Error connecting to the database:', error));
