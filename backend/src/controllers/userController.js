import { User } from '../models/user.model.js';
import { FriendRequest } from '../models/friendRequest.model.js';
import AppDataSource from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { uploadImg } from '../services/uploadImage.js';

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

		if (password.length < 6) {
			return res
				.status(400)
				.json({ msg: 'Password must be at least 6 characters long' });
		}

		if (username.length < 3) {
			return res
				.status(400)
				.json({ msg: 'Username must be at least 3 characters long' });
		}

		if (name.length < 3) {
			return res
				.status(400)
				.json({ msg: 'Name must be at least 3 characters long' });
		}

		if (lastname.length < 3) {
			return res
				.status(400)
				.json({ msg: 'Lastname must be at least 3 characters long' });
		}

		if (mail.length < 3) {
			return res
				.status(400)
				.json({ msg: 'Mail must be at least 3 characters long' });
		}

		if (mail.includes(' ')) {
			return res.status(400).json({ msg: 'Mail must be valid' });
		}

		if (!mail.includes('@')) {
			return res.status(400).json({ msg: 'Mail must be valid' });
		}

		if (!mail.includes('.')) {
			return res.status(400).json({ msg: 'Mail must be valid' });
		}

		if (username.split(' ').length > 1) {
			return res.status(400).json({ msg: 'Username must be valid' });
		}

		if (name.split(' ').length > 1) {
			return res.status(400).json({ msg: 'Name must be valid' });
		}

		if (lastname.split(' ').length > 1) {
			return res.status(400).json({ msg: 'Lastname must be valid' });
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

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

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

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

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
			relations: ['posts'],
		});

		console.log(req.userId);

		if (user && user.posts) {
			user.posts.sort(
				(a, b) => b.creationDate.getTime() - a.creationDate.getTime(),
			);
		}

		return res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const getProfile = async (req, res) => {
	const { userId } = req.params;
	try {
		const user = await AppDataSource.getRepository(User).findOne({
			where: { id: userId },
			relations: ['posts'],
		});
		return res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const editProfile = async (req, res) => {
	try {
		const userId = Number(req.userId);
		const data = req.body;
		const profilePic = req.files?.profilePic;

		if (data.editImage === 'true') {
			let resImg = { profilePic: null, imageId: null };
			if (profilePic.mimetype !== 'text/plain') {
				const res = await uploadImg(profilePic);
				resImg = {
					profilePic: res.imageUrl,
					imageId: res.imageId,
				};
			}
			data.profilePic = resImg.profilePic;
		}

		delete data.editImage;

		const profile = {
			...data,
		};

		await AppDataSource.getRepository(User).update(userId, profile);

		return res.json({ msg: 'Profile edited' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const sendFriendRequest = async (req, res) => {
	try {
		const { senderId, receiverId } = req.body;

		if (!senderId || !receiverId) {
			return res.status(400).json({ msg: 'Missing parameters' });
		}

		const friendRequestRepository = AppDataSource.getRepository(FriendRequest);
		const friendRequest = friendRequestRepository.create({
			senderId,
			receiverId,
		});

		await friendRequestRepository.save(friendRequest);
		return res.json({ ok: true, friendRequest });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const acceptFriendRequest = async (req, res) => {
	try {
		const { requestId } = req.body;

		const friendRequestRepository = AppDataSource.getRepository(FriendRequest);
		const friendRequest = await friendRequestRepository.findOne({
			where: { id: requestId },
		});

		if (!friendRequest) {
			return res.status(404).json({ msg: 'Friend request not found' });
		}

		const userRepository = AppDataSource.getRepository(User);
		const sender = await userRepository.findOne({
			where: { id: friendRequest.senderId },
			relations: ['friends'],
		});
		const receiver = await userRepository.findOne({
			where: { id: friendRequest.receiverId },
			relations: ['friends'],
		});

		sender.friends.push(receiver);
		receiver.friends.push(sender);

		await userRepository.save(sender);
		await userRepository.save(receiver);

		friendRequest.status = 'accepted';
		await friendRequestRepository.save(friendRequest);

		return res.json({ ok: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const rejectFriendRequest = async (req, res) => {
	try {
		const { requestId } = req.body;

		const friendRequestRepository = AppDataSource.getRepository(FriendRequest);
		const friendRequest = await friendRequestRepository.findOne({
			where: { id: requestId },
		});

		if (!friendRequest) {
			return res.status(404).json({ msg: 'Friend request not found' });
		}

		friendRequest.status = 'rejected';
		await friendRequestRepository.save(friendRequest);

		return res.json({ ok: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

const getAllUsers = async (req, res) => {
	try {
		const userRepository = AppDataSource.getRepository(User);
		const users = await userRepository.find();
		return res.json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Server error' });
	}
};

export const UserController = {
	register,
	login,
	profile,
	sendFriendRequest,
	acceptFriendRequest,
	rejectFriendRequest,
	getAllUsers,
	editProfile,
	getProfile,
};
