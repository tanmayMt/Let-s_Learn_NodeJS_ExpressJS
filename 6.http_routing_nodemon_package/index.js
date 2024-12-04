const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req,res)=>{
  //console.log(req.url);
  // const handleReadFile = (statusCode, fileLocation) => {
  //   fs.readFile(fileLocation, (err, data) => {
  //     res.writeHead(statusCode, { "Content-Type": "text/html" });
  //     res.write(data);
  //     res.end();
  //   });
  // };
  if(req.url === "/"){
    fs.readFile("./views/home.html",(err,data)=>{
      res.writeHead(200,{"Content-Type": "text/html"});
      res.write(data);
      res.end();
    })
    // handleReadFile(200, "./views/index.html");
  }
  else if(req.url === "/about"){
    fs.readFile("./views/about.html",(err,data)=>{
      res.writeHead(200,{"Content-Type":"text/html"});
      res.write(data);
      res.end();
    })
    //handleReadFile(200, "./views/about.html");
  }
  else if(req.url === "/contact"){
    fs.readFile("./views/contact.html",(err,data)=>{
      res.writeHead(200,{"Content-Type":"text/html"});
      res.write(data);
      res.end();
    })
    //handleReadFile(200, "./views/contact.html");
  }
  else{
    fs.readFile("./views/error.html",(err,data)=>{
      res.writeHead(400,{"Content-Type":"text/html"});
      res.write(data);
      res.end();
    })
  }
  // res.end("Welcome to server");
})

server.listen(PORT,hostName,()=>{
  console.log(`Server is running at http://${hostName}:${PORT}`);
})