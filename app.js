const ratelimit = require('./lib/ratelimit');
module.exports = class {
  constructor(app) {
    this.app = app;
  }

  configDidLoad() {
    ratelimit(this.app);
  }

  didLoad() {
    this.app.config.middleware.splice(0, 0, 'rateLimiter');
  }
};
