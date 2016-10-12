var http = require('http');
http.createServer(function(req, res){
    console.log('Got Request for' + req.url);
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>Hello Code and Azure Web Apps</h1>');
}).listen(process.env.Port);