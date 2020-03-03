const mapper = require('controller');
const httpResult = require('common/HttpResult');
const userService = require('service/UserService');

mapper.put('/user', {
    body: 'UserCreateVo'
}, async (ctx) => {
    await userService.create(ctx.request.body);
    ctx.body = httpResult.success();
});

mapper.post('/user', {
    body: 'UserUpdateVo'
}, async (ctx) => {
    await userService.update(ctx.request.body);
    ctx.body = httpResult.success();
});

mapper.get('/user/:id', {
    params: {
        id: {type: 'number', in: 'path'}
    }
}, async (ctx) => {
    let [rows] = await userService.detail(ctx.params.id);
    ctx.body = httpResult.success(...rows);
});

mapper.schema('UserCreateVo', {
    name: {type: 'string'},
    age: {type: 'number'}
});

mapper.schema('UserUpdateVo', {
    id: {type: 'number'},
    name: {type: 'string'},
    age: {type: 'number'}
});