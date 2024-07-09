const { server } = require('./src/mocks/node')
console.log('server', server)
server.listen({ onUnhandledRequest: 'bypass' })
console.log('MSW Server is running ')
