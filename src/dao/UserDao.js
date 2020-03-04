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

async function update({name, age, id}) {
    await UserDo.update({name, age}, {
        where: {
            id
        }
    });
}

async function detail(id) {
    return UserDo.findAll({
        attributes: ['id', 'name', 'age'],
        where: {
            id
        }
    })
}

module.exports = {
    create,
    deleted,
    update,
    detail
};