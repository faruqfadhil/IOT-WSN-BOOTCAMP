let publicSocket = null;

const configure = function (io) {
    if (!isConfigured())
        publicSocket = io;
};

const isConfigured = function () {
    return publicSocket != null;
};

const createRefreshResponse = function (refresh) {
    return {
        refresh: refresh
    };
};

const emitEvent = function (eventName, body) {
    publicSocket.emit(eventName, body);
};
const notifyCowsData = function(id,data){
    emitEvent('/topic/cows/'+id,data)
}
const notifyDetailCows = function(cowsId,data){
    emitEvent('/topic/cows/detail/'+cowsId,data)
}

module.exports = {
    configure,
    notifyCowsData,
    notifyDetailCows
}