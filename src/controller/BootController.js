const httpResult = require('../common/HttpResult');
const mapper = require('./index');

mapper.get('/boot', (ctx) => {
    ctx.body = httpResult.success('boot');
});