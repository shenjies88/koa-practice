const JoiSwagger = require('koa-joi-swagger');
const Joi = JoiSwagger.default.Joi;

let Err = Joi.object().json().keys({
    code: Joi.number().integer(),
    message: Joi.string(),
    data: Joi.object(),
});

function api(schema) {
    let result = {
        code: Joi.number().integer().required().description('code'),
        msg: Joi.string().required().description('msg')
    };
    if (schema) {
        result.data = schema;
    }
    return Joi.object().keys(result)
}

function page(schema) {
    return Joi.object().json().keys({
        rows: Joi.array().items(schema).description('数据'),
        count: Joi.number().integer().description('总数')
    });
}

module.exports = {
    api,
    page,
    querySchema: function (schema) {
        return schema
    },
    errorResponse: {
        'default': {
            description: '出现错误(请求错误4xx)',
            schema: Err,
        },
    },
    pageQuery: function (schema = Joi.object()) {
        return Joi.object().keys({
            pageNum: Joi.number().integer().optional().default(1).description('当前页数(starts with 1)'),
            pageSize: Joi.number().integer().optional().default(10).description('每页条数'),
        }).concat(schema)
    },
    pageApi: function (schema) {
        return api(page(schema))
    }
};