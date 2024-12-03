
const http = require('http');
const port = 3000;

// console.log(http);

http.createServer((req,res)=>{
    res.end("Hello I am your firt server");
}).listen(port)


