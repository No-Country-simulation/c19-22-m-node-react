import AppDataSource from '../config/db';
import { Post } from '../models/post.model';
import { uploadImg } from '../services/uploadImage';

const createPost = async (req, res) => {
	const userId = Number(req.userId);
	const data = req.body;
	const { img } = req.files;
	try {
		const resImg = await uploadImg(img);
		const postRepository = AppDataSource.getRepository(Post);
		const item = postRepository.create({
			...data,
			...resImg,
			user: { id: userId },
		});

		await postRepository.save(item);

		res.status(201).json({ ok: true, message: 'post create' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error server' });
	}
};

export const PostController = {
	createPost,
};
