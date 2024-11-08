//figure out which keys the app has to use.

if (process.env.NODE_ENV === 'production') {
    // we're in prod, return prod set of keys
    module.exports = require('./prod')
} else {
    // we're in development, return dev set of keys
    module.exports = require('./dev')
}