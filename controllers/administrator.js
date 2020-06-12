let sdb = require("../models/sdb")
let cdb = require("../models/cdb")
let db = require("../models/db")
exports.showRegS = (reg,res)=>{
    res.render("regS")
}

exports.showRegC = (reg,res)=>{
    res.render("regC")
}

exports.doRegS = (req,res)=>{
    console.log(req.body)
    sdb.add(req.body,function(info){
        res.send(info);
    })
}

exports.doRegC = (req,res) =>{
    console.log(req.body)
    cdb.add(req.body,function(info){
        res.send(info);
    })
}

exports.admin_teacher =(reg,res)=>{
    db.getTeacher(function(arr){
        res.render("Admin",{"arr":arr})
    });
}

exports.admin_student =(reg,res)=>{
    db.getStudent(function(arr){
        res.render("Admin_student",{"arr":arr})
    });
}
exports.admin_course =(reg,res)=>{
    db.getCourse(function(arr){
        res.render("Admin_course",{"arr":arr})
    });
}