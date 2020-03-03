const httpResult = require('../common/HttpResult');
const Mapper = require('koa-mapper');

const mapper = new Mapper.default();

mapper.get('/', (ctx) => {
    ctx.body = httpResult.success('hello world');
});

mapper.get('/boot', (ctx) => {
    ctx.body = httpResult.success('boot');
});

module.exports = mapper;