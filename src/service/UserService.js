const userDao = require('dao/UserDao');

async function detail(id) {
    return await userDao.detail(id);
}

async function create(param) {
    await userDao.create(param);
}

module.exports = {
    create,
    detail
};