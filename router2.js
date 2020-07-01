const express = require("express");
const router = express.Router();
const index = require("./controllers/index")
const teacher = require("./controllers/teachers")
const student = require("./controllers/students")
const admin = require("./controllers/administrator")
//req.body里面没东西了？？？
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//Session 的工作流程
//当浏览器访问服务器并发送第一次请求时，服务器端会创建一个 session 对象，生成一个类似于 key,value 的键值对
//然后将 key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带 key(cookie)， 找到对应的 session(value)。
// 客户的信息都保存在 session 中

//Cookie 和 Session 区别
//1、cookie 数据存放在客户的浏览器上，session 数据放在服务器上。
//2、cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗 考虑到安全应当使用 session。
//3、session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面，应当使用 COOKIE。
//4、单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存 20 个 cookie。
var cs = require("cookie-session");
//第三方中间件
router.use(cs({
    //cookie的名字键
    name: 'sessionId',
    //用于cookie值的加密关键字
    keys: ['lilililiwei']      //加密cookie的字符，很重要，密码加密的思想可见一斑
}))

//将request.session里存入的user赋值给response.locals，这样才能在渲染的时候从服务器引用session里的信息
//如果不是为了获得这个，仅仅只是为了权限验证，直接用cookie就行
//这里用到的是session保存信息的功能
//req.session里存的信息不能直接使用
router.use(function (req, res, next) {
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    // console.log("卡了吧！")
    //路由中间件  use get post等
    next();
});


//设置各种请求方式的路由,链式
router
    .get("/", index.showIndex)
    .post("/index", index.dologin)
    .get("/success", index.showsuccess)
    .get("/Student", index.showstudent)
    .get("/Teacher", index.showteacher)
    .get("/Teacher_my_course", teacher.teacher_mycourse)
    .get("/Admin", index.showadmin)
    .get("/Admin_teacher", admin.admin_teacher)
    .get("/Admin_student", admin.admin_student)
    .get("/Admin_course", admin.admin_course)
    .get("/forgetPsw", index.showForget)
    .get("/Student_select_course", student.Student_select_course)
    .get("/Student_my_course", student.student_my_course)
    .get("/myclass", student.myclass)
    .get("/TregC", admin.showTRegC)
    .get("/regT", teacher.showRegT)
    .get("/regS", admin.showRegS)
    .get("/regC", admin.showRegC)
    .post("/choosecourse", student.choosecourse)
    .get("/STUupdate", student.showstudata)
    .post("/STUupdate", student.doupdate)
    .get("/SUpassword", student.showstupwd)
    .post("/SUpassword", student.doupdatepwd)
    .get("/T_update_password", teacher.showteapwd)
    .post("/T_update_password", teacher.doupdatepwd)
    .get("/TEAupdate", teacher.showteadata)
    .post("/TEAupdate", teacher.doupdate)
    .get("/tea_update_course", teacher.teacher_mycourse_up)
    .post("/tea_update_course", teacher.doupdatecourse)
    .get("/Student_desselect_course", student.Student_desselect_course)
    .post("/Student_desselect_course", student.dropcourse)
    .get("/Tea_delete_course", teacher.teacher_mycourse_de)
    .post("/Tea_delete_course", teacher.dodeletecourse)
    .get("/Admin_delete_stu", admin.admindelstudent)
    .post("/Admin_delete_stu", admin.deletestudent)
    .get("/Admin_delete_tea", admin.admindeltea)
    .post("/Admin_delete_tea", admin.deletetea)
    .get("/Admin_delete_course", admin.admindelcourse)
    .post("/Admin_delete_course", admin.deletecourse)
    .post("/regT", teacher.doRegT)
    .post("/regS", admin.doRegS)
    .post("/regC", admin.doRegC)
    .post("/TregC", teacher.doRegC)
    .get('/logout', function (req, res) {
        req.session.user = null;
        req.session.error = null;
        res.redirect('/');
    });



module.exports = router;