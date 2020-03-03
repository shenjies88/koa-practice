const Koa = require('koa');
const appConfig = require('./src/config/appConfig');
const logger = require('./src/common/logger');
const error = require('./src/common/error');

const app = new Koa();

//common
app.use(error);
app.use(logger);

//routers
app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(appConfig.port);
