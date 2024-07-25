export default class SearchTagDTO {
	constructor(tag) {
		this.id = tag.id;
		this.name = tag.name;
		this.quantity = Number(tag.quantity);
	}
}
