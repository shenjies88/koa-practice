const userDoc = require('swagger/UserDoc');
module.exports = {
    swagger: '2.0',
    info: {
        title: 'Koa API',
        description: 'Koa API',
        version: '1.0.0',
    },
    //  the domain of the service
    //  host: 127.0.0.1:3457
    //  array of all schemes that your API supports
    schemes: ['https', 'http'],
    //  will be prefixed to all paths
    basePath: '/',
    consumes: ['application/x-www-form-urlencoded'],
    produces: ['application/json'],
    paths: {
        ...userDoc
    }
};