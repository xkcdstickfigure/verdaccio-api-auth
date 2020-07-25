const axios = require("axios");

class AuthCustomPlugin {
	constructor(config) {
		this.url = config.url;
		return this;
	}

	authenticate(username, password, cb) {
		axios
			.post(`${this.url}/authenticate`, {username, password})
			.then(res => cb(null, res.data))
			.catch(() => cb(null, false));
	}
}

module.exports = config => new AuthCustomPlugin(config);
