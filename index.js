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

	allow_access(user, pkg, cb) {
		axios
			.post(`${this.url}/allow_access`, {user, package: pkg})
			.then(res => cb(null, res.data))
			.catch(() => cb(null, false));
	}

	allow_publish(user, pkg, cb) {
		axios
			.post(`${this.url}/allow_publish`, {user, package: pkg})
			.then(res => cb(null, res.data))
			.catch(() => cb(null, false));
	}

	allow_unpublish(user, pkg, cb) {
		axios
			.post(`${this.url}/allow_unpublish`, {user, package: pkg})
			.then(res => cb(null, res.data))
			.catch(() => cb(null, false));
	}
}

module.exports = config => new AuthCustomPlugin(config);
