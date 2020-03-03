const Koa = require('koa');
const appConfig = require('./src/config/appConfig');
const logger = require('./src/common/logger');
const error = require('./src/common/errorController');

const app = new Koa();

//common
app.use(error);
app.use(logger);

//routers
app.use(async ctx => {
    ctx.body = 'Hello World';
    throw new Error();
});

app.listen(appConfig.port);
