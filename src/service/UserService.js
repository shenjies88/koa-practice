const userDao = require('dao/UserDao');

async function create(param) {
    await userDao.create(param);
}

module.exports = {
    create
};