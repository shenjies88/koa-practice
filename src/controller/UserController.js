const mapper = require('controller');
const httpResult = require('common/HttpResult');
const userService = require('service/UserService');

mapper.get('/user/:id', {
    params: {
        id: {type: 'number', in: 'path'}
    }
}, async (ctx) => {
    let [rows] = await userService.detail(ctx.params.id);
    ctx.body = httpResult.success(...rows);
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