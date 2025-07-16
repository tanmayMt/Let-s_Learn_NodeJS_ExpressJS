
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'  //127.0.0.1 <- This address is  localhost
// console.log(http);


const myServer = http.createServer((req,res)=>{
    res.writeHead(202, {'Content-Type':'html'});
    res.write("<h1>Hello</h1>");
    res.write("<p>I am your first server</p>");
    res.end();
})

myServer.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
    //console.log(`server is running successfully at http://${hostname}`);
});