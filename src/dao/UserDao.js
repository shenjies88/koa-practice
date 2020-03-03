const mysqlPool = require('config/DataBaseConfig');

async function create({name, age}) {
    await mysqlPool.execute('insert into user (name,age) values (?,?)', [name, age]);
}

module.exports = {
    create
};