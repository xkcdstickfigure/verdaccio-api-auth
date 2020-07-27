const axios = require("axios");
const {getForbidden} = require("@verdaccio/commons-api");

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
			.then(res =>
				res.data
					? cb(null, true)
					: cb(getForbidden("not allowed to access package"))
			)
			.catch(() => cb(getForbidden("not allowed to access package")));
	}

	allow_publish(user, pkg, cb) {
		axios
			.post(`${this.url}/allow_publish`, {user, package: pkg})
			.then(res =>
				res.data
					? cb(null, true)
					: cb(getForbidden("not allowed to publish package"))
			)
			.catch(() => cb(getForbidden("not allowed to publish package")));
	}

	allow_unpublish(user, pkg, cb) {
		axios
			.post(`${this.url}/allow_unpublish`, {user, package: pkg})
			.then(res =>
				res.data
					? cb(null, true)
					: cb(getForbidden("not allowed to unpublish package"))
			)
			.catch(() => cb(getForbidden("not allowed to unpublish package")));
	}
}

module.exports = config => new AuthCustomPlugin(config);
