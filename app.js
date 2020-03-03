const Koa = require('koa');
const appConfig = require('./src/config/AppConfig');
const loggerController = require('./src/common/LoggerController');
const errorController = require('./src/common/ErrorController');

const app = new Koa();

//common
app.use(errorController);
app.use(loggerController);

//routers
app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(appConfig.port);
