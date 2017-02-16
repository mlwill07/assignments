function addDino(req, res, next) {
    req.dinosaur = 'T-Rex';
    next()
}

module.exports = addDino;