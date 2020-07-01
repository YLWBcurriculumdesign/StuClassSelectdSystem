let express = require("express");
let app = express();

//静态资源
app.use(express.static( 'public/css'));
app.use(express.static( 'public/img'));
app.use(express.static( 'public/js'));

//导入外置路由
var router = require('./router');
//引入外置路由
app.use(router);

// 运行ejs模块
app.engine( '.html', require( 'ejs' ).__express );//两个下划线
// 修改模板文件的后缀名为html
app.set( 'view engine', 'html' );




// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin','*');//跨域--添加这句话就可以正常返回数据了
//     next();
// })



// var session = require("express-session");
// app.use(session({
//     secret:'secret',
//     resave:true,
//     saveUninitialized:false,

// }));








// app.use(function(req, res, next){
//     res.locals.user = req.session.user;
//     var err = req.session.error;
//     res.locals.message = '';
//     if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
//     next();
// });



app.listen(3000,()=>{
    console.log("服务器启动了~")
});