const httpResult = require('common/HttpResult');
const socketClient = require('static/oneClient');
const twoClient = require('static/twoClient');
const mapper = require('./index');

mapper.get('/', (ctx) => {
    ctx.response.redirect('/swagger');
});

mapper.get('/oneClient', (ctx) => {
    ctx.body = socketClient;
});

mapper.get('/twoClient', (ctx) => {
    ctx.body = twoClient;
});

mapper.get('/boot', (ctx) => {
    ctx.body = httpResult.success('boot');
});