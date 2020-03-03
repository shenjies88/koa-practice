const Mapper = require('koa-mapper');
const mapper = new Mapper.default();
module.exports = mapper;

const bootController = require('./BootController');
const mapperController = require('./MapperController');
