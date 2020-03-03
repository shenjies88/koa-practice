const httpResult = require('./HttpResult');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.error(err);
        ctx.status = 200;
        ctx.body = httpResult.fail(err.message || '服务器出现未知错误');
    }
};