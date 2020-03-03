const mysql = require('mysql2');
const aop = require("@yfe/aop");
const pool = mysql.createPool({host: 'localhost', user: 'root', password: 'password', database: 'koa'});
const promisePool = pool.promise();
console.log('数据库链接成功');

aop.before(promisePool, 'execute', (sql, [param]) => {
    console.debug(`SQL: ${sql}`);
    console.debug(`参数: ${param}`);
});
module.exports = promisePool;