const { RedisRateLimiter } = require('rolling-rate-limiter');
const assert = require('assert');

function checkConfig(config) {
  assert(config.namespace, '[egg-ratelimiter] Must set  `namespace`');
  assert(config.interval, '[egg-ratelimiter] Must set  `interval`');
  assert(config.maxInInterval, '[egg-ratelimiter] Must set  `maxInInterval`');
}

module.exports = app => {
  app.addSingleton('ratelimiter', config => {
    config = Object.assign({}, config);
    checkConfig(config);
    const limiter = new RedisRateLimiter({
      client: app.redis, // client instance from `redis` or `ioredis`
      namespace: config.namespace, // prefix for redis keys
      interval: config.interval, // milliseconds
      maxInInterval: config.maxInInterval,
    });
    return limiter;
  });
  app.createRatelimiter = app.ratelimiter.createInstance.bind(app.ratelimiter);
};

