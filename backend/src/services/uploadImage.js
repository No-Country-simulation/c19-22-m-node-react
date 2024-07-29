import cloudinary from '../config/cloudinary.js';
import 'dotenv/config';

const extensionesValidas = ['png', 'jpg', 'jpeg'];

export const uploadImg = async (img) => {
	const name = img.name.split('.');
	console.log(img.name);
	const extension = name[name.length - 1];

	if (!extensionesValidas.includes(extension)) {
		throw new Error('Invalid file');
	}

	try {
		const { tempFilePath } = img;
		const upload = await cloudinary.uploader.upload(tempFilePath, {
			upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
		});
		// await cloudinary.api.delete_all_resources();
		return { imageUrl: upload.url, imageId: upload.public_id };
	} catch (e) {
		throw new Error(e);
	}
};
