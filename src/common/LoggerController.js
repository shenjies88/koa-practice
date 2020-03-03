module.exports = async function logger(ctx, next) {
    const str = ':method :url :origin'
        .replace(':method', ctx.method)
        .replace(':url', ctx.url)
        .replace(':origin', ctx.origin);
    console.log(str);
    await next();
};

