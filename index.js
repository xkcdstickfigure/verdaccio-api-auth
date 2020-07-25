class AuthCustomPlugin {
    constructor(config, options) {
      return this;
    }
  
    authenticate(user, password, cb) {
      console.log(user);
      console.log(password);
      cb(null, []);
    }
  
    allow_access() {}
  
    allow_publish() {}
  }
  
  module.exports = (config, options) => new AuthCustomPlugin(config, options);