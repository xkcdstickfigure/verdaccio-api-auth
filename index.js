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

	allow_access(username, packageName, cb) {
		axios
			.get(`${this.url}/allow_access?user=${username}&package=${packageName}`)
			.then(res => cb(null, res.data))
			.catch(() => cb(null, false));
	}

	allow_publish(username, packageName, cb) {
		axios
			.get(`${this.url}/allow_publish?user=${username}&package=${packageName}`)
			.then(res => cb(null, res.data))
			.catch(() => cb(null, false));
	}

	allow_unpublish(username, packageName, cb) {
		axios
			.get(`${this.url}/allow_unpublish?user=${username}&package=${packageName}`)
			.then(res => cb(null, res.data))
			.catch(() => cb(null, false));
	}
}

module.exports = config => new AuthCustomPlugin(config);
