const userDao = require('dao/UserDao');
const pageUtil = require('utils/PageUtil');

async function create(param) {
    await userDao.create(param);
}

async function deleted(id) {
    await userDao.deleted(id);
}

async function update(id, param) {
    await userDao.update(id, param);
}

async function detail(id) {
    return await userDao.detail(id);
}

async function pageList(param) {
    return await userDao.pageList(pageUtil.page(param));
}

module.exports = {
    create,
    deleted,
    update,
    detail,
    pageList
};