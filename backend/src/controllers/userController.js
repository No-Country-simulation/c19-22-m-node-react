import { User } from '../models/user.model.js';
import AppDataSource from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const register = async (req, res) => {
	try {
		console.log(req.body);
		const { username, password, name, lastname, mail } = req.body;

		if (!username || !password || !name || !lastname || !mail) {
			return res.status(400).json({ msg: 'Missing parameters' });
		}

		const userRepository = AppDataSource.getRepository(User);

		if (await userRepository.findOne({ where: { username } })) {
			return res.status(400).json({ msg: 'Username already exists' });
		}

		if (await userRepository.findOne({ where: { mail } })) {
			return res.status(400).json({ msg: 'mail already exists' });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = userRepository.create({
			username,
			password: hashedPassword,
			name,
			lastname,
			mail,
		});

		await userRepository.save(user);
		console.log(user);

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: '1h',
		});

		return res.json({ ok: true, token });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({ msg: 'Missing parameters' });
		}

		const userRepository = AppDataSource.getRepository(User);
		const user = await userRepository.findOne({ where: { username } });

		if (!user) {
			return res.status(400).json({ msg: 'Username or password incorrect' });
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res.status(400).json({ msg: 'Username or password incorrect' });
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: '1h',
		});

		return res.json({ ok: true, token });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const profile = async (req, res) => {
	try {
		const user = await AppDataSource.getRepository(User).findOne({
			where: { id: req.userId },
		});
		return res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

export const UserController = {
	register,
	login,
	profile,
};
