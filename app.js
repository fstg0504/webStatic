const express = require('express');
const fs=require("fs");
const app = express();
app.use(express.static("public"));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method === 'OPTIONS') {
        res.send(200)
    } else {
        next()
    }
});
// 使用fs.readFile打开html文件
app.get("/", function(request, response) {
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write('hellworld');
    response.end();
});
// app.get("/index.html", function(request, response) {
//     fs.readFile("./"+request.path.substr(1),function(err,data){
//         // body
//         if(err){
//             console.log(err);
//             //404：NOT FOUND
//             response.writeHead(404,{"Content-Type":"text/html"});
//         }
//         else{
//             //200：OK
//             response.writeHead(200,{"Content-Type":"text/html"});
//             response.write(data.toString());
//         }
//         response.end();
//     });
// });
app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
    console.log("server start");
});
