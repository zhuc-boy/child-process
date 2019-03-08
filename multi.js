var fd = require('child_process');
var server = require('net').createServer();
//var cd=require('cluster');
var cpus = require('os').cpus().length;
//console.log(`${__dirname}/index.js`)
//for(let i=0;i<cpus;i++){
/*fd.fork(`./index.js`,(options)=>{
    console.log(options)
}).send('server')*/
server.listen(1337, () => {
    for (let i = 0; i < cpus; i++) {
        fd.fork(`./index.js`).send('server', server)
    }
    server.close();//关闭主线程的net服务，全部转移到子进程
})
//}
