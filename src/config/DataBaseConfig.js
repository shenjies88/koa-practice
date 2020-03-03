const mysql = require('mysql2');
const pool = mysql.createPool({host: '10.168.1.20', user: 'root', database: 'koa'});
const promisePool = pool.promise();
console.log('数据库链接成功');

module.exports = promisePool;