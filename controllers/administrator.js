let sdb = require("../models/sdb");
let cdb = require("../models/cdb");
let db = require("../models/db");
let Tdb = require("../models/Tdb");
exports.showRegS = (reg,res)=>{
    res.render("regS")
};

exports.showTRegC = (reg,res)=>{
    res.render("TregC")
};

exports.showRegC = (reg,res)=>{
    res.render("regC")
};

exports.doRegS = (req,res)=>{
    console.log(req.body);
    sdb.add(req.body,function(info){
        res.send(info);
    })
};

exports.doRegC = (req,res) =>{
    console.log(req.body);
    cdb.add(req.body,function(info){
        res.send(info);
    })
};

exports.admin_teacher =(reg,res)=>{
    db.getTeacher(function(arr){
        res.render("Admin",{"arr":arr})
    });
};

exports.admin_student =(reg,res)=>{
    db.getStudent(function(arr){
        res.render("Admin_student",{"arr":arr})
    });
};
exports.admin_course =(reg,res)=>{
    db.getCourse(function(arr){
        res.render("Admin_course",{"arr":arr})
    });
};
//渲染一个管理员删除学生的逻辑
exports.admindelstudent =(reg,res)=>{
    db.getStudent(function(arr){
        res.render("Admin_delete_stu",{"arr":arr})
    });
};
exports.deletestudent=(req,res)=>{
    sdb.deletestudent(req.body,function(info) {
        res.send(info);
    })
};
//渲染一个管理员删除老师的逻辑
exports.admindeltea =(reg,res)=>{
    Tdb.getTeachers(function(arr){
        res.render("Admin_delete_tea",{"arr":arr})
    });
};
exports.deletetea=(req,res)=>{
    Tdb.deletetea(req.body,function(info) {
        res.send(info);
    })
};
