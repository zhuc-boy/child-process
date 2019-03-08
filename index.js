var http = require("http");
var fs = require("fs");
var mine = require("mime");
var url = require("parse-url");
const fileaddress = "./index.html";
//console.log('1111111')
function a(res, file) {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, { "Content-type": mine.getType(file) });
      res.end(data);
    }
  });
}
function b() {}
var servers = http.createServer((req, res) => {
  //let urldetail = url(req.url);
  switch (req.method) {
    case "GET":
      if (req.url == "/") {
        a(res, fileaddress);
      } else {
        a(res, `.${req.url}`);
      }
    case "post":
      b();
  }
});
servers.on("connection", d => {
  //console.log(d);
});
servers.on("close", () => {
  console.log("11111");
});
process.on('message',(m,tcp)=>{
  console.log(m);
  /*servers.listen(3000, "127.0.0.1", () => {
    console.log("server listening on port 3000.");
  });*/
  if(m==='server'){
    /*servers.listen(3000, "127.0.0.1", () => {
      console.log("server listening on port 3000.");
    });*/
    console.log(`${process.pid}`)
    tcp.on('connection',(socket)=>{
      servers.emit('connection',socket)
    })
  }
})
process.on()

