function logRequest(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next();
}

function blockSpecialBrand(req, res, next) {
    if(req.params.id == 666) {
        return res.status(403).send('Demon 😈');
    }
    next();
}

module.exports = { logRequest, blockSpecialBrand };