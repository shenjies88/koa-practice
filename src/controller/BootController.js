const httpResult = require('common/HttpResult');
const socketClient = require('static/SocketClient');
const mapper = require('./index');

mapper.get('/', (ctx) => {
    ctx.body = socketClient;
});

mapper.get('/boot', (ctx) => {
    ctx.body = httpResult.success('boot');
});