const httpResult = require('./HttpResult');
const Moment = require("moment");

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + err);
        ctx.status = 200;
        ctx.body = httpResult.fail(err.message || '服务器出现未知错误');
    }
};