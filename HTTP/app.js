var http = require("http");

http.createServer(function(req,res){
        res.end('<h1>Welcome</h1>');
}).listen(8181);
console.log('Meu servidor esta rodando');