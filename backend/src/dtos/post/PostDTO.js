export default class PostDTO {
	constructor(post) {
		this.id = post.id;
		this.pic = post.imageUrl;
		this.username = post.user.username;
		this.userPic = post.user.profilePic;
		this.likes = post.likes;
		this.description = post.content;
	}
}
