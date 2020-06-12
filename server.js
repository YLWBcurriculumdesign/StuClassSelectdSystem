let express = require("express");
let app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// var multer = require('multer');
var session = require("express-session");
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,

}));


let index = require("./controllers/index")
//教师
let teacher = require("./controllers/teachers")
let student = require("./controllers/students")
let admin = require("./controllers/administrator")

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
app.use(express.static( 'public/js'));

app.get("/",index.showIndex);
app.post("/index",index.dologin);

app.get("/success",index.showsuccess)
app.get("/Student",index.showstudent)
app.get("/Teacher",index.showteacher)
app.get("/Admin",index.showadmin)
app.get("/Admin_teacher",admin.admin_teacher)
app.get("/Admin_student",admin.admin_student)
 app.get("/forgetPsw",index.showForget)
app.get("/Select_course",student.showselect)
app.get("/regT",teacher.showRegT)
app.get("/regS",admin.showRegS)
app.get("/regC",admin.showRegC)
//修改个人信息
app.get("/update",student.update)
app.post("/update",student.doupdate)
app.post("/regT",teacher.doRegT)
app.post("/regS",admin.doRegS)
app.post("/regC",admin.doRegC)
app.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log("服务器启动了~")
});