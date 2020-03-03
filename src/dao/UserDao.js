const mysqlPool = require('config/DataBaseConfig');

async function create({name, age}) {
    await mysqlPool.execute('insert into user (name,age) values (?,?)', [name, age]);
}

async function update({name, age, id}) {
    let sql = `update user set`;
    if (name) {
        sql = sql + ' ,name = ?';
    }
    if (age) {
        sql = sql + ' ,age = ?'
    }
    let reg = /[,]{1}/;
    sql = sql.replace(reg, "");
    sql = sql + ' where id = ?';
    await mysqlPool.execute(sql, [name, age, id]);
}

async function detail(id) {
    return mysqlPool.execute('select id , name , age from user where id = ?', [id]);
}


module.exports = {
    create,
    update,
    detail
};