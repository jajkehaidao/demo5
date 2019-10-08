//1,引入相关库
let express = require("express");
let mysql = require("mysql");
//2，获得express对象
let app = express();

//3,引入body-parser模块
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 4，创建 application/x-www-form-urlencoded 编码解析

//5,设置静态文件
app.use(express.static("public"));
//6,设置跨域访问
// app.all("*", function (req, res, next) {
//   //res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", " 3.2.1");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//设置固定值
let ip = "http://localhost:";
let port = 8888;
let PhotoController = require("./controllers/PhotoController");
let FollowController = require("./controllers/FollowController");
app.get("/setion", PhotoController.setion);
//关注图书榜的请求
app.get("/follow", FollowController.follow);
//
let controller = require('./controlloer/controlloer.js')
app.post('/register', controller.getdata)
app.get('/Login', controller.getAllUsename)
//4,进行监听
app.listen(port, function () {
  console.log(`${port}启动`);
});
