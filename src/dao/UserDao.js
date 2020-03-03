const mysqlPool = require('config/DataBaseConfig');

async function detail(id) {
    return mysqlPool.execute('select id , name , age from user where id = ?', [id]);
}

async function create({name, age}) {
    await mysqlPool.execute('insert into user (name,age) values (?,?)', [name, age]);
}

module.exports = {
    create,
    detail
};