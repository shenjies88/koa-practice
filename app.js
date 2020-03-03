const Koa = require('koa');
const logger = require('koa-logger');
const Moment = require("moment");
const controller = require('./src/controller/');
const appConfig = require('./src/config/AppConfig');
const errorController = require('./src/common/ErrorController');

const app = new Koa();

//third party
app.use(logger((str) => {                // 使用日志中间件
    console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
}));
app.use(controller);

//common
app.use(errorController);

app.listen(appConfig.port);
console.log('服务启动成功');