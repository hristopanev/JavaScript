function validateRequest(request) {
    const uriRegex = /^([\w.]+)$/gm;
    const msgRegex = /^([^<>\\&'" ]+)/gm;

    let validMethod = false;
    let validURI = false;
    let validVersion = false;
    let validMessage = false;



    if (request.hasOwnProperty('method')) {
       validMethod = methodValidation(request);
    }
    if (request.hasOwnProperty('uri')) {
        validURI = uriValidation(request);
    }
    if (request.hasOwnProperty('version')) {
        validVersion = versionValidation(request);
    }
    if (request.hasOwnProperty('message')) {
        validMessage = messageValidation(request);
    }


    function uriValidation(request) {
        let validURI = false;

        if (request.uri === '*' || uriRegex.test(request.uri)){
            validURI = true;
        }


        return validURI;
    }
    function methodValidation(request) {
        let validMethod = false;

        if (request.method === 'GET' ||
            request.method === 'POST' ||
            request.method === 'DELETE' ||
            request.method === 'CONNECT') {
            validMethod = true;
        }
        return validMethod;
    }
    function versionValidation(request) {
       let validVersion = false;

        if (request.version  === 'HTTP/0.9' ||
            request.version === 'HTTP/1.0' ||
            request.version === 'HTTP/1.1' ||
            request.version === 'HTTP/2.0') {
            validVersion = true;
        }
        
        return validVersion;
    }
    function messageValidation(request) {
        let validationMessage = false;
        
        if (msgRegex.test(request.message && request.message === '')){
            validationMessage = true;
        }
        return validationMessage;
    }


    if (validVersion && validURI && validMethod && validMessage) {
        return request;
    }



    //TODO....

}


console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
