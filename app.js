const Koa = require('koa');
const logger = require('./src/logger');
const error = require('./src/error');
const all = require('./src/all');
const app = new Koa();


app.use(error);
app.use(logger);
app.use(all);
app.use(async ctx => {
    ctx.body = 'Hello World';

});
app.listen(3000);
