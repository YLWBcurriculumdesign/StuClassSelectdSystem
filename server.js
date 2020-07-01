const express = require("express");
const app = express();

//静态资源，即内置中间件（唯一内置）
app.use(express.static('public/css'));
app.use(express.static('public/img'));
app.use(express.static('public/js'));

//导入外置路由
var router = require('./router2');
//引入外置路由，即外置中间件
app.use(router);

// 运行ejs模块
app.engine('.html', require('ejs').__express);//两个下划线
// 修改模板文件的后缀名为html
app.set('view engine', 'html');


app.listen(3000, () => {
    console.log("服务器启动了~")
});