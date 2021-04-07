const devConf = require('./dev')

Object.assign(devConf, {
    host: 'editor-redis',
})

Object.assign(devConf, {
    host: 'editor-mongo',
})

Object.assign(devConf, {
    host: 'editor-mysql',
})

module.exports = devConf
