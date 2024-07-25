import SearchTagDTO from '../dtos/tag/SearchTagDTO.js';
import { tagRepository } from '../repositories/tagRespository.js';
import ResponseDTO from '../shared/dtos/ResponseDTO.js';

const getAll = async (query = '') => {
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

export const TagService = {
	getAll,
};
