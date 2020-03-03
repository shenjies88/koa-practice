const Koa = require('koa');
const appConfig = require('./src/config/appConfig');
const logger = require('./src/common/logger');
const errorController = require('./src/common/errorController');

const app = new Koa();

//common
app.use(errorController);
app.use(logger);

//routers
app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(appConfig.port);
