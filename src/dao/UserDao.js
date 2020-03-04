const Sequelize = require('sequelize');
const sequelize = require('config/DataBaseConfig');

const UserDo = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
});

async function create({name, age}) {
    await UserDo.create({name, age});
}

async function deleted(id) {
    await UserDo.destroy({
        where: {
            id
        }
    });
}

async function update(id, {name, age}) {
    await UserDo.update({name, age}, {
        where: {
            id
        }
    });
}

async function detail(id) {
    return UserDo.findOne({
        attributes: ['id', 'name', 'age'],
        where: {
            id
        }
    })
}

async function pageList({offset, limit}) {
    return UserDo.findAndCountAll({
        attributes: ['id', 'name', 'age'],
        offset,
        limit,
        order: [['id', 'DESC']]
    })
}

module.exports = {
    create,
    deleted,
    update,
    detail,
    pageList
};