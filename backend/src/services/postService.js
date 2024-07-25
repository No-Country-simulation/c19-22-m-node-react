// import { ILike, Not } from 'typeorm';
import PostDTO from '../dtos/post/PostDTO.js';
import SearchPostDTO from '../dtos/post/SearchPostDto.js';
import { postRepository } from '../repositories/postRepository.js';
import ResponseDTO from '../shared/dtos/ResponseDTO.js';
import { uploadImg } from './uploadImage.js';

const create = async (id, data, img) => {
	const userId = id;
	let resImg = { imageUrl: null, imageId: null };
	if (img.mimetype !== 'text/plain') resImg = await uploadImg(img);

	const post = {
		...data,
		fontSize: data.fontSize == '' ? null : data.fontSize,
		...resImg,
		creationDate: new Date(),
		user: { id: userId },
	};

	if (data.tagId && data.tagId !== '') post.tags = [{ id: data.tagId }];

	const item = postRepository.create(post);
	await postRepository.save(item);
	return ResponseDTO.success('Post created');
};

const getAll = async (userId, page, size, tagId) => {
	const queryBuilder = postRepository
		.createQueryBuilder('post')
		.innerJoin('post.tags', 'tag')
		.innerJoin('post.user', 'user')
		.where('post.user_id != :userId', { userId });

	if (tagId) queryBuilder.andWhere('tag.id = :tagId', { tagId });

	if (size !== null) {
		queryBuilder.skip((page - 1) * size).take(size);
	}

	const posts = await queryBuilder
		.addSelect(['user.username', 'username'])
		.skip((page - 1) * size)
		.take(size)
		.getMany();

	const postsDTO = posts.map((post) => new SearchPostDTO(post));

	return ResponseDTO.success('Posts obtained', postsDTO);
};

const getById = async (id) => {
	const post = await postRepository.findOne({
		where: { id },
		relations: ['user'],
	});
	const postDTO = new PostDTO(post);
	return ResponseDTO.success('Post obtained', postDTO);
};

export const PostService = {
	create,
	getAll,
	getById,
};
