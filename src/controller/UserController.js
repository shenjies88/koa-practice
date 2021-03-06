const mapper = require('controller');
const httpResult = require('common/HttpResult');
const userService = require('service/UserService');

mapper.put('/user', {
    body: 'UserCreateVo'
}, async (ctx) => {
    await userService.create(ctx.request.body);
    ctx.body = httpResult.success();
});

mapper.delete('/user/:id', {
    params: {
        id: {type: 'number', in: 'path', required: true}
    }
}, async (ctx) => {
    await userService.deleted(ctx.params.id);
    ctx.body = httpResult.success();
});

mapper.post('/user/:id', {
    params: {
        id: {type: 'number', in: 'path', required: true}
    },
    body: 'UserUpdateVo'
}, async (ctx) => {
    await userService.update(ctx.params.id, ctx.request.body);
    ctx.body = httpResult.success();
});

mapper.get('/user/:id', {
    params: {
        id: {type: 'number', in: 'path', required: true}
    }
}, async (ctx) => {
    ctx.body = httpResult.success(await userService.detail(ctx.params.id));
});

mapper.post('/user-list-page', {
    body: 'UserPageReqVo'
}, async (ctx) => {
    ctx.body = httpResult.success(await userService.pageList(ctx.request.body));
});


mapper.schema('UserPageReqVo: PageReqVo', {});

mapper.schema('UserCreateVo', {
    name: {type: 'string', required: true},
    age: {type: 'number', required: true}
});

mapper.schema('UserUpdateVo', {
    name: {type: 'string'},
    age: {type: 'number'}
});