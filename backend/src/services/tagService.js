import TagDTO from '../dtos/post/TagDTO.js';
import SearchTagDTO from '../dtos/tag/SearchTagDTO.js';
import { tagRepository } from '../repositories/tagRespository.js';
import ResponseDTO from '../shared/dtos/ResponseDTO.js';

const searchTags = async (query = '') => {
	const tags = await tagRepository
		.createQueryBuilder('tag')
		.leftJoinAndSelect('tag.posts', 'post')
		.select('tag.id', 'id')
		.addSelect('tag.title', 'name')
		.addSelect('COUNT(post.id)', 'quantity')
		.where('tag.title ILIKE :searchTerm', { searchTerm: `%${query}%` })
		.groupBy('tag.id')
		.addGroupBy('tag.title')
		.getRawMany();

	const tagsDTO = tags.map((tag) => new SearchTagDTO(tag));

	return ResponseDTO.success('Tags obtained', tagsDTO);
};

const getAll = async () => {
	const tags = await tagRepository.find();

	const tagsDTO = tags.map((tag) => new TagDTO(tag));

	return ResponseDTO.success('Tags obtained', tagsDTO);
};

export const TagService = {
	searchTags,
	getAll,
};
