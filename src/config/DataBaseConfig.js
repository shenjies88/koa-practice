const Sequelize = require('sequelize');
const sequelize = new Sequelize('koa', 'root', 'password', {
    host: '10.168.1.20',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true,
    }
});

console.log('数据库链接成功');

module.exports = sequelize;