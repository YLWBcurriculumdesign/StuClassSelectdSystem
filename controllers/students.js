let sdb = require("../models/sdb");
let db = require("../models/db");
exports.showselect=(req,res)=>{
    res.render("Select_course")
};

exports.Student_select_course =(req,res)=>{
    db.getCourse(function(arr){
        res.render("Student_select_course",{"arr":arr})
    })
};

//渲染一个处理学生修改个人信息的逻辑
exports.doupdate=(req,res)=>{
    sdb.UPDATE(req.body,function(info) {
        res.send(info);
    })
    // res.redirect("/update");
};

//渲染修改信息页面
exports.showstudata=(req,res) =>{
    if(req.session.user){
        sdb.getStudent(req.session,function(arr){
            res.render("STUupdate",{"arr":arr})
        });
    }
};


//渲染一个处理学生修改密码的逻辑
exports.doupdatepwd=(req,res)=>{
    sdb.UPDATEpwd(req.body,function(info) {
        res.send(info);
    })
    // res.redirect("/update");
};

//渲染修改密码页面
exports.showstupwd=(req,res) =>{
    if(req.session.user){
        sdb.getStudent(req.session,function(arr){
            res.render("SUpassword",{"arr":arr})
        });
    }
};

exports.student_my_course=(req,res)=>{
    res.render("Student_my_course")
};
exports.myclass = (req,res)=>{
     console.log(req.session.user.username)

    sdb.getStudentcourse(req.session,function(info){
        res.send(info)
    })
};
exports.choosecourse=(req,res)=>{
    sdb.choosecourse(req.session,req.body,function(info) {
        res.send(info);
    })
    // res.redirect("/update");
};

//渲染一个学生退选页面
exports.Student_desselect_course=(req,res)=>{
    sdb.getStudentcourse(req.session,function(arr){
        res.render("Student_desselect_course",{"arr":arr})
    })
};
exports.dropcourse=(req,res)=>{
    sdb.dropcourse(req.body,function(info) {
        res.send(info);
    })
};





