const Mapper = require('koa-mapper');
const mapper = new Mapper.default();
module.exports = mapper;

mapper.schema('PageReqVo', {
    pageNum: {type: 'number', minimum: 1, default: 1},
    pageSize: {type: 'number', minimum: 1, default: 10}
});
const bootController = require('./BootController');
const userController = require('./UserController');
