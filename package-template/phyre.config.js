export const errorHandler = {
    customHandler: true,
    customHandlerPath: './shared/errorHandler.js'
}

export const _404 = {
    custom404: false,
    custom404Path: './shared/_404.jsx'
}

export default {
    packagesStructure: true,
    packages: [
        { name: 'root1', prefix: '/' },
        { name: 'root2', prefix: '/app' }
    ]
}