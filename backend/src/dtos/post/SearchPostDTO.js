export default class SearchPostDTO {
	constructor(post, userId) {
		this.id = post.id;
		this.content = post.content;
		this.backgroundColor = post.backgroundColor;
		this.textColor = post.textColor;
		this.fontSize = post.fontSize;
		this.fontFamily = post.fontFamily;
		this.imageUrl = post.imageUrl;
		this.isLikedByCurrentUser = post.likes.some(
			(like) => like.user.id === userId,
		);
		this.likes = post.likes.map((like) => ({
			id: like.id,
			userId: like.user.id,
			username: like.user.username,
		}));
		this.userId = post.user.id;
		this.userProfilePic = post.user.profilePic;
		this.username = post.user.username;
		this.comments = post.comments
			.map((comment) => ({
				id: comment.id,
				content: comment.content,
				userId: comment.user.id,
				userProfilePic: comment.user.profilePic,
				username: comment.user.username,
			}))
			.slice(0, 2);
	}

	flattenUser(user) {
		return {
			id: user.id,
			profilePic: user.profilePic,
			username: user.username,
		};
	}
}
