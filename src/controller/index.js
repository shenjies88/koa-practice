const combineRouters = require('koa-combine-routers');
const BootController = require('./BootController');

const controller = combineRouters(
    BootController
);

module.exports = controller;