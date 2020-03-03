const httpResult = require('./httpResult');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = 200;
        ctx.body = httpResult.fail(err.message || '服务器出现未知错误');
    }
};