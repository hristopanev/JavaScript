const offertModel = function () {

    const createOffert = function (params) {
        let data = {
            ...params
        };

        let url = `/appdata/${storage.appKey}/offerts`;
            

        let header = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, header);
    };


    return {
        createOffert
    }

}();