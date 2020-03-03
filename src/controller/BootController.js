const Router = require('koa-router');
const httpResult = require('../common/HttpResult');

const controller = new Router();

controller.get('/', ctx => {
    ctx.body = httpResult.success('hello world');
});

controller.get('/boot', ctx => {
    ctx.body = httpResult.success('boot');
});

module.exports = controller;