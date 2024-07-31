export default class ResponseDTO {
	constructor(success, data, message) {
		this.success = success;
		this.data = data;
		this.message = message;
	}

	static success(message = 'Request was successful', data = null) {
		return new ResponseDTO(true, data, message);
	}

	static error(message = 'An error occurred', data = null) {
		return new ResponseDTO(false, data, message);
	}
}
