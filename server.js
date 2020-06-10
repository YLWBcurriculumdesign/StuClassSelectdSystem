let express = require("express");
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require("express-session");
let app = express();
let index = require("./controllers/index")
//教师
let teacher = require("./controllers/teachers")
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*10 //过期时间设置(单位毫秒)
    }
}));
app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});
;
app.set("view engine","ejs");
app.use(express.static( 'public/css'));
app.use(express.static( 'public/img'));

app.get("/",index.showIndex);
app.post("/index",index.dologin);
// app.get("/regT",teacher.showRegister)
// app.post("/regT",teacher.doRegister)
app.get("/success",index.showsuccess)
 app.get("/forgetPsw",index.showForget)

app.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log("服务器启动了~")
});