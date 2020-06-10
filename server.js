let express = require("express");
let app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

var multer = require('multer');
var session = require("express-session");
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*10 //过期时间设置(单位毫秒)
    }
}));


let index = require("./controllers/index")
//教师
let teacher = require("./controllers/teachers")
let student = require("./controllers/students")

app.set("view engine","ejs");
// 修改模板文件的后缀名为html
app.set( 'view engine', 'html' );
// 运行ejs模块
app.engine( '.html', require( 'ejs' ).__express );//两个下划线



app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});
;

//静态资源
app.use(express.static( 'public/css'));
app.use(express.static( 'public/img'));

app.get("/",index.showIndex);
app.post("/index",index.dologin);
// app.get("/regT",teacher.showRegister)
// app.post("/regT",teacher.doRegister)
app.get("/success",index.showsuccess)
 app.get("/forgetPsw",index.showForget)
app.get("/Select_course",student.showselect)
app.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log("服务器启动了~")
});