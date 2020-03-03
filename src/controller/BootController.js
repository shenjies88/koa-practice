const httpResult = require('../common/HttpResult');
const mapper = require('./index');

mapper.get('/', (ctx) => {
    ctx.body = httpResult.success('hello world');
});

mapper.get('/boot', (ctx) => {
    ctx.body = httpResult.success('boot');
});