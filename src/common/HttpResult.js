function httpResult(state, msg, data) {
    this.state = state;
    this.mes = msg;
    this.data = data;
}

module.exports = {
    success: (data = null) => {
        return new httpResult(0, "success", data);
    },
    fail: (msg) => {
        return new httpResult(1, msg, null);
    }
};
