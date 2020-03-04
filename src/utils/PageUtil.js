function page(param) {
    let {pageNum, pageSize} = param;
    return Object.assign(param, {
        offset: (pageNum - 1) * pageSize,
        limit: pageSize
    });
}

module.exports = {
    page
};