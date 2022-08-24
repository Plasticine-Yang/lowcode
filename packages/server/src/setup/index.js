const setupMiddleware = require('./setup_middleware')

function setup(app) {
    setupMiddleware(app)
}

module.exports = setup