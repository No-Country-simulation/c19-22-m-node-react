import { Not } from 'typeorm';
import { postRepository } from '../repositories/postRepository.js';
import ResponseDTO from '../shared/dtos/ResponseDTO.js';
import { uploadImg } from './uploadImage.js';

const create = async (id, data, img) => {
	const userId = id;
	const resImg = await uploadImg(img);
	const item = postRepository.create({
		...data,
		...resImg,
		creationDate: new Date(),
		user: { id: userId },
	});
	await postRepository.save(item);
	return ResponseDTO.success('Post created');
};

const getAll = async (userId, page, size) => {
	const posts = await postRepository.find({
		take: size,
		skip: size * (page - 1),
		where: {
			user: {
				id: Not(userId),
			},
		},
	});
	return ResponseDTO.success('Posts obtained', posts);
};

export const PostService = {
	create,
	getAll,
};
