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

// // 渲染一个显示学生修改个人信息的页面
// exports.update=(req,res)=> {
//     sdb.getStudata(req.body,function(arr){
//         res.render("update",{"arr":arr})
//     });
//     // res.render('update');
// };
