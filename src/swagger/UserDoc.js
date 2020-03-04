const JoiSwagger = require('koa-joi-swagger');
const Joi = JoiSwagger.default.Joi;
const {api, pageApi, pageQuery, pathId} = require('swagger/utils');

const CreateVo = Joi.object().json().keys({
    name: Joi.string().required().description('姓名'),
    age: Joi.number().integer().required().description('年龄'),
});

const UpdateVo = Joi.object().json().keys({
    name: Joi.string().description('姓名'),
    age: Joi.number().integer().description('年龄'),
});

const DetailVo = Joi.object().json().keys({
    id: Joi.number().integer().description('id'),
    name: Joi.string().description('姓名'),
    age: Joi.number().integer().description('年龄'),
});

const ListPageItemVo = Joi.object().json().keys({
    id: Joi.number().integer().description('id'),
    name: Joi.string().description('姓名'),
    age: Joi.number().integer().description('年龄'),
});

module.exports = {
    '/user': {
        put: {
            summary: '新增用户',
            tags: ['用户接口'],
            parameters: {
                body: CreateVo
            },
            responses: {
                '200': {
                    schema: api(null),
                }
            }
        }
    },
    '/user/{id}': {
        delete: {
            summary: '删除用户',
            tags: ['用户接口'],
            parameters: {
                pathParams: pathId()
            },
            responses: {
                '200': {
                    schema: api(null),
                }
            }
        },
        post: {
            summary: '修改用户',
            tags: ['用户接口'],
            parameters: {
                pathParams: pathId(),
                body: UpdateVo
            },
            responses: {
                '200': {
                    schema: api(null),
                }
            }
        },
        get: {
            summary: '查询用户',
            tags: ['用户接口'],
            parameters: {
                pathParams: pathId()
            },
            responses: {
                '200': {
                    schema: api(DetailVo),
                }
            }
        }
    },
    '/user-list-page': {
        post: {
            summary: '查询用户列表分页',
            tags: ['用户接口'],
            parameters: {
                body: pageQuery()
            },
            responses: {
                '200': {
                    schema: pageApi(ListPageItemVo),
                }
            }
        }
    }
};