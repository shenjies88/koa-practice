const Koa = require('koa');
const logger = require('koa-logger');
const Moment = require("moment");
const {toSwaggerDoc, ui} = require('koa-joi-swagger');
const path = require("path");
require('node-require-alias').setAlias({
    'service': path.join(__dirname, '/src/service'),
    'controller': path.join(__dirname, '/src/controller'),
    'common': path.join(__dirname, '/src/common'),
    'config': path.join(__dirname, '/src/config'),
    'dao': path.join(__dirname, '/src/dao'),
    'utils': path.join(__dirname, '/src/utils'),
    'swagger': path.join(__dirname, '/src/swagger')
});
const controller = require('controller');
const appConfig = require('config/AppConfig');
const errorController = require('common/ErrorController');
const mixedDoc = require('swagger');
const server = require('socket.io');

const app = new Koa();

//common
app.use(errorController);

//logger
app.use(logger((str) => {                // 使用日志中间件
    console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
}));

//swagger
const swaggerDoc = toSwaggerDoc(mixedDoc);
app.use(ui(swaggerDoc, {pathRoot: '/swagger'}));

//controller
app.use(controller.routes());
app.use(controller.allowedMethods());

//socket.io
const io = server(app);
io.on('connection', function (socket) {
    console.log('a user connected');
});

app.listen(appConfig.port);
console.log(`服务启动成功 监听 ：${appConfig.port}`);