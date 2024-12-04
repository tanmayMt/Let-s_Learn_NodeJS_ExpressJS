const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url === "/"){
    fs.readFile("index.html",(error,data)=>{
      res.writeHead(200,{"Content-Type": "text/html"});
      res.write(data);
      res.end();
    })
  }
  // res.end("Welcome to server");
})

server.listen(PORT,hostName,()=>{
  console.log(`Server is running at http://${hostName}:${PORT}`);
})