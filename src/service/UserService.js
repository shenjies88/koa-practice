const userDao = require('dao/UserDao');

async function create(param) {
    await userDao.create(param);
}

async function update(param) {
    await userDao.update(param);
}

async function detail(id) {
    return await userDao.detail(id);
}

module.exports = {
    create,
    update,
    detail
};