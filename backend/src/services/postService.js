// import { ILike, Not } from 'typeorm';
import PostDTO from '../dtos/post/PostDTO.js';
import SearchPostDTO from '../dtos/post/SearchPostDto.js';
import { commentRepository } from '../repositories/commentRepository.js';
import { likeRepository } from '../repositories/likeRepository.js';
import { postRepository } from '../repositories/postRepository.js';
import ResponseDTO from '../shared/dtos/ResponseDTO.js';
import { uploadImg } from './uploadImage.js';

const create = async (id, data, img) => {
	const userId = Number(id);
	let resImg = { imageUrl: null, imageId: null };
	const tags = JSON.parse(`[${data.tags}]`);
	if (img.mimetype !== 'text/plain') resImg = await uploadImg(img);

	const post = {
		...data,
		fontSize: data.fontSize == '' ? null : data.fontSize,
		...resImg,
		creationDate: new Date(),
		user: { id: userId },
	};

	if (Array.isArray(tags) && tags.length > 0) {
		post.tags = tags.map((tagId) => ({ id: tagId }));
	}

	if (data.tagId && data.tagId !== '') post.tags = [{ id: data.tagId }];

	const item = postRepository.create(post);
	await postRepository.save(item);
	return ResponseDTO.success('Post created');
};

const getAll = async (userId, page, size, tagId) => {
	const queryBuilder = postRepository
		.createQueryBuilder('post')
		.innerJoin('post.tags', 'tag')
		.leftJoinAndSelect('post.comments', 'comments')
		.leftJoinAndSelect('post.likes', 'likes')
		.leftJoinAndSelect('likes.user', 'likeUser')
		.leftJoinAndSelect('comments.user', 'commentUser')
		.innerJoinAndSelect('post.user', 'user')
		.where('post.user_id != :userId', { userId })
		.addOrderBy('comments."creationDate"', 'ASC');

	if (tagId) queryBuilder.andWhere('tag.id = :tagId', { tagId });

	if (size !== null) {
		queryBuilder.skip((page - 1) * size).take(size);
	}

	const posts = await queryBuilder
		.select([
			'post.id',
			'post.content',
			'post.backgroundColor',
			'post.textColor',
			'post.fontSize',
			'post.fontFamily',
			'post.imageUrl',
			'comments.id',
			'comments.content',
			'commentUser.id',
			'commentUser.username',
			'commentUser.profilePic',
			'user.id',
			'user.username',
			'user.profilePic',
			'likes.id',
			'likeUser.id', // Incluye el id del usuario que hizo el like
			'likeUser.username', // Incluye el nombre del usuario que hizo el like
		])
		.skip((page - 1) * size)
		.take(size)
		.getMany();

	const postsDTO = posts.map((post) => new SearchPostDTO(post, userId));

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

const createComment = async (postId, userId, content) => {
	const post = {
		content,
		user: { id: userId },
		post: { id: postId },
	};

	const item = commentRepository.create(post);
	await commentRepository.save(item);
	return ResponseDTO.success('Comment created');
};

const deleteComment = async (commentId) => {
	await commentRepository.delete(commentId);
	return ResponseDTO.success('Comment delete');
};

const createLike = async (postId, userId) => {
	const existingLike = await likeRepository.findOne({
		where: { postId, userId },
	});

	if (!existingLike) {
		const like = {
			user: { id: userId },
			post: { id: postId },
		};
		const item = likeRepository.create(like);
		await likeRepository.save(item);
		return ResponseDTO.success('Like created');
	} else {
		throw new Error('Like ya existe');
	}
};

const deleteLike = async (postId, userId) => {
	const existingLike = await likeRepository.findOne({
		where: { postId, userId },
	});

	if (existingLike) {
		await likeRepository.remove(existingLike);
		return ResponseDTO.success('Like removed');
	} else {
		throw new Error('Like no existe');
	}
};

export const PostService = {
	create,
	getAll,
	getById,
	createComment,
	deleteComment,
	createLike,
	deleteLike,
};
