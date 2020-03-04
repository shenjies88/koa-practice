const Mapper = require('koa-mapper');
const mapper = new Mapper.default();
module.exports = mapper;

mapper.schema('PageReqVo', {
    pageNum: {type: 'number'},
    pageIndex: {type: 'number'}
});
const bootController = require('./BootController');
const userController = require('./UserController');
