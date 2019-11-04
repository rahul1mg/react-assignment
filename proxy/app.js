const http = require("http")
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({rejectUnauthorized: false}); // See (†)


const server = http.createServer(function (req, res) {
    proxy.web(req, res, {target: 'https://jobs.github.com'});
});


server.listen(3000)

