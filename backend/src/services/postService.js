import LikeDTO from '../dtos/like/LikeDTO.js';
import PostDTO from '../dtos/post/PostDTO.js';
import SearchPostDTO from '../dtos/post/SearchPostDTO.js';
import { commentRepository } from '../repositories/commentRepository.js';
import { likeRepository } from '../repositories/likeRepository.js';
import { postRepository } from '../repositories/postRepository.js';
import ResponseDTO from '../shared/dtos/ResponseDTO.js';
import { uploadImg } from './uploadImage.js';

const create = async (id, data, img) => {
	const userId = Number(id);
	let resImg = { imageUrl: null, imageId: null };
	let tags = [];
	if (data.tags) tags = JSON.parse(`[${data.tags}]`);
	if (img && img.mimetype !== 'text/plain') resImg = await uploadImg(img);

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

	const item = postRepository.create(post);
	await postRepository.save(item);
	return ResponseDTO.success('Post created');
};

const getAll = async (userId, tagId) => {
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

	const posts = await queryBuilder
		.select([
			'post.id',
			'post.content',
			'post.description',
			'post.backgroundColor',
			'post.textColor',
			'post.fontSize',
			'post.fontFamily',
			'post.fontAlign',
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
			'likeUser.id',
			'likeUser.username',
		])
		.getMany();

	const postsDTO = posts.map((post) => new SearchPostDTO(post, userId));

	return ResponseDTO.success('Posts obtained', postsDTO);
};

const search = async (userId, tagId) => {
	const queryBuilder = postRepository
		.createQueryBuilder('post')
		.innerJoin('post.tags', 'tag')
		.where('post.user_id != :userId', { userId })
		.orderBy('post."creationDate"', 'DESC');

	if (tagId) queryBuilder.andWhere('tag.id = :tagId', { tagId });

	const posts = await queryBuilder
		.select([
			'post.id',
			'post.content',
			'post.description',
			'post.backgroundColor',
			'post.textColor',
			'post.fontSize',
			'post.fontFamily',
			'post.fontAlign',
			'post.imageUrl',
		])
		.getMany();

	// const postsDTO = posts.map((post) => new SearchPostDTO(post, userId));

	return ResponseDTO.success('Posts obtained', posts);
};

const getById = async (id, userId) => {
	const post = await postRepository.findOne({
		where: { id },
		relations: ['user', 'comments', 'comments.user', 'likes', 'likes.user'],
	});
	const postDTO = new PostDTO(post, userId);
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

const getLikes = async (userId) => {
	const likes = await likeRepository
		.createQueryBuilder('like')
		.leftJoinAndSelect('like.post', 'post')
		.leftJoin('post.user', 'user')
		.leftJoinAndSelect('like.user', 'likeUser')
		.where('user.id = :userId', { userId })
		.orderBy('like.creationDate', 'DESC')
		.getMany();
	const likesDTO = likes.map((like) => new LikeDTO(like));
	return ResponseDTO.success('Likes obtained', likesDTO);
};

export const PostService = {
	create,
	getAll,
	search,
	getById,
	createComment,
	deleteComment,
	createLike,
	deleteLike,
	getLikes,
};
