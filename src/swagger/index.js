const userDoc = require('swagger/UserDoc');
module.exports = {
    swagger: '2.0',
    info: {
        title: 'Koa API',
        version: '1.0.0',
    },
    schemes: ['https', 'http'],
    basePath: '/',
    consumes: ['application/json'],
    produces: ['application/json'],
    paths: {
        ...userDoc
    }
};