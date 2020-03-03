const Koa = require('koa');
const logger = require('koa-logger');
const Moment = require("moment");
const controller = require('./src/controller/');
const appConfig = require('./src/config/AppConfig');
const errorController = require('./src/common/ErrorController');

const app = new Koa();

//common
app.use(errorController);

//third party
app.use(logger((str) => {                // 使用日志中间件
    console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
}));
app.use(controller.routes());

app.listen(appConfig.port);
console.log(`服务启动成功 监听 ：${appConfig.port}`);