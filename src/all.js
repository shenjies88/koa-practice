const compose = require('koa-compose');

async function random(ctx, next) {
    if ('/random' === ctx.path) {
        ctx.body = Math.floor(Math.random() * 10);
    } else {
        await next();
    }
}

async function backwards(ctx, next) {
    if ('/backwards' === ctx.path) {
        ctx.body = 'sdrawkcab';
    } else {
        await next();
    }
}

async function pi(ctx, next) {
    if ('/pi' === ctx.path) {
        ctx.body = String(Math.PI);
    } else {
        await next();
    }
}

const all = compose([random, backwards, pi]);
module.exports = all;