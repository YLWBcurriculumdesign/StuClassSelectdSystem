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
