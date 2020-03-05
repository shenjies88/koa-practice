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
    'swagger': path.join(__dirname, '/src/swagger'),
    'static': path.join(__dirname, '/src/static')
});
const controller = require('controller');
const appConfig = require('config/AppConfig');
const errorController = require('common/ErrorController');
const mixedDoc = require('swagger');


const app = new Koa();
const server = require('http').Server(app.callback());
const io = require('socket.io')(server);

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
io.on('connection', socket => {
    console.log('socket连接成功');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

server.listen(appConfig.port, () => {
    console.log(`服务启动成功 监听 ：http://localhost:${appConfig.port}`);
});
