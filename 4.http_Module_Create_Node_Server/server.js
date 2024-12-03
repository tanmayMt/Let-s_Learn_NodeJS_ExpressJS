
const http = require('http');
const port = 3000;

// console.log(http);


const myServer = http.createServer((req,res)=>{
    res.end("Hello I am your firt server");
})

myServer.listen(port,()=>{
    console.log(`server is running successfully at ${port}`);
})


