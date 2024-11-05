
module.exports = (request, response, next) => {
    if(request.body && request.body.password) {
        request.body.password = btoa(request.body.password);
    }
    next();
}