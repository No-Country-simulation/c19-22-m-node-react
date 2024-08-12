export default class LikeDTO {
	constructor(like) {
		this.id = like.id;
		this.creationDate = like.creationDate;
		this.likeUserProfilePic = like.user.profilePic;
		this.likeUserUsername = like.user.username;
		this.likeUserId = like.user.id;
		this.content = like.post.content;
		this.description = like.post.description;
		this.backgroundColor = like.post.backgroundColor;
		this.textColor = like.post.textColor;
		this.fontSize = like.post.fontSize;
		this.fontFamily = like.post.fontFamily;
		this.fontAlign = like.post.fontAlign;
		this.imageUrl = like.post.imageUrl;
	}
}
