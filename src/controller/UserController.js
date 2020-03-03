const mapper = require('controller');
const httpResult = require('common/HttpResult');
const userService = require('service/UserService');
mapper.get('/user/:id', {
    params: {
        id: {type: 'number'}
    }
}, (ctx) => {
    ctx.body = ctx.params;
});

mapper.put('/user', {
    body: 'UserCreateVo'
}, async (ctx) => {
    await userService.create(ctx.request.body);
    ctx.body = httpResult.success();
});

mapper.schema('UserCreateVo', {
    name: {type: 'string'},
    age: {type: 'number'}
});