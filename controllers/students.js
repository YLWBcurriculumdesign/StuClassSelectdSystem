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