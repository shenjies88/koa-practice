const Mapper = require('koa-mapper');
const mapper = new Mapper.default();

mapper.get('/users/:id', {
    params: {
        id: {type: 'number'},
        info: {type: 'User', in: 'query'}
    }
}, (ctx) => {
    ctx.body = ctx.params;
});

mapper.post('/users', {
    body: {
        users: {type: 'array<User>'}
    }
}, (ctx) => {
    ctx.body = ctx.request.body;
});

mapper.define('User', {
    id: {type: 'number', required: true},
    name: {type: 'string', required: true}
});

module.exports = mapper;