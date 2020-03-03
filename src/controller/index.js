const compose = require('koa-compose');
const bootController = require('./BootController');
const mapperController = require('./MapperController');

let c = compose([
    bootController.routes(),
    mapperController.routes(),
]);

module.exports = c;