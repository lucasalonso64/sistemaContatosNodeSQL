var http = require('http');

http.createServer(function(req, res){
    res.end("Teste")

}).listen(8081);

console.log("Servidor executando...")
