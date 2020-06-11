let db = require("../models/db")
exports.showRegS = (reg,res)=>{
    res.render("regS")
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