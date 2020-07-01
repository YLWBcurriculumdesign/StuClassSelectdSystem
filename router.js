let express = require("express");
let router = express.Router();
let index = require("./controllers/index")
let teacher = require("./controllers/teachers")
let student = require("./controllers/students")
let admin = require("./controllers/administrator")
//req.body里面没东西了？？？
var bodyParser = require('body-parser');     
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

//引入session
var session = require("express-session");
router.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,

}));

//跨域访问
router.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');//跨域--添加这句话就可以正常返回数据了
    next();
})

//unknowed
router.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});

//设置各种请求方式的路由,链式
router
.get("/",index.showIndex)
.post("/index",index.dologin)
.get("/success",index.showsuccess)
.get("/Student",index.showstudent)
.get("/Teacher",index.showteacher)
.get("/Teacher_my_course",teacher.teacher_mycourse)
.get("/Admin",index.showadmin)
.get("/Admin_teacher",admin.admin_teacher)
.get("/Admin_student",admin.admin_student)
.get("/Admin_course",admin.admin_course)
.get("/forgetPsw",index.showForget)
.get("/Student_select_course",student.Student_select_course)
.get("/Student_my_course",student.student_my_course)
.get("/myclass",student.myclass)
.get("/TregC",admin.showTRegC)
.get("/regT",teacher.showRegT)
.get("/regS",admin.showRegS)
.get("/regC",admin.showRegC)
.post("/choosecourse",student.choosecourse)
.get("/STUupdate",student.showstudata)
.post("/STUupdate",student.doupdate)
.get("/SUpassword",student.showstupwd)
.post("/SUpassword",student.doupdatepwd)
.get("/T_update_password",teacher.showteapwd)
.post("/T_update_password",teacher.doupdatepwd)
.get("/TEAupdate",teacher.showteadata)
.post("/TEAupdate",teacher.doupdate)
.get("/tea_update_course",teacher.teacher_mycourse_up)
.post("/tea_update_course",teacher.doupdatecourse)
.get("/Student_desselect_course",student.Student_desselect_course)
.post("/Student_desselect_course",student.dropcourse)
.get("/Tea_delete_course",teacher.teacher_mycourse_de)
.post("/Tea_delete_course",teacher.dodeletecourse)
.get("/Admin_delete_stu",admin.admindelstudent)
.post("/Admin_delete_stu",admin.deletestudent)
.get("/Admin_delete_tea",admin.admindeltea)
.post("/Admin_delete_tea",admin.deletetea)
.get("/Admin_delete_course",admin.admindelcourse)
.post("/Admin_delete_course",admin.deletecourse)
.post("/regT",teacher.doRegT)
.post("/regS",admin.doRegS)
.post("/regC",admin.doRegC)
.post("/TregC",teacher.doRegC)
.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});



module.exports = router;