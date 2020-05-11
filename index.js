const http = require('http')

http.createServer (function(req, res) {
    res.end('Hello World')
    
}).listen(3000, () => console.log('server on port 3000'))
////