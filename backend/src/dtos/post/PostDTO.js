export default class PostDTO {
	constructor(post) {
		this.id = post.id;
		this.username = post.user.username;
		this.userPic = post.user.profilePic;
		this.pic = post.imageUrl;
		this.content = post.content;
		this.description = post.description;
		this.backgroundColor = post.backgroundColor;
		this.textColor = post.textColor;
		this.fontSize = post.fontSize;
		this.fontFamily = post.fontFamily;
		this.fontAlign = post.fontAlign;
		this.likes = post.likes.length;
		this.description = post.description;
		this.comments = post.comments.map((comment) => ({
			id: comment.id,
			username: comment.user.username,
			userId: comment.user.id,
			content: comment.content,
			profilePic: comment.user.profilePic,
		}));
	}
}
