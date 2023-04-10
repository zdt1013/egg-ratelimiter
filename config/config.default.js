'use strict';

/**
 * egg-ratelimiter default config
 * @member Config#ratelimiter
 * @property {String} SOME_KEY - some description
 */
exports.ratelimiter = {
  default: {
    namespace: 'rate-limiter:', // prefix for redis keys
    interval: 60000, // milliseconds
    maxInInterval: 10,
  },
  useAgent: false,
};
