module.exports = async function logger(ctx, next) {
    const str = ':method ":url"'
        .replace(':method', ctx.method)
        .replace(':url', ctx.url);
    console.log(str);
    await next();
};

