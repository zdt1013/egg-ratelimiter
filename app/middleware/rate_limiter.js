
module.exports = (opts, app) => {
  return async function rateLimiter(ctx, next) {
    const wasBlocked = await app.ratelimiter.limit(ctx.ip);
    if (wasBlocked) {
      ctx.body = {
        code: '429',
        msg: 'ratelimit',
      };
      return;
    }
    await next();
  };
};
