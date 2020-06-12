let tdb = require("../models/Tdb")
exports.showRegT = (req,res)=>{
    res.render("regT")
}

exports.doRegT = (req,res)=>{
    console.log(req.body)
    tdb.add(req.body,function(info){
        // if (info==1){
        //     req.session.error = "工号重复，请检查您的工号！";
        //     res.sendStatus(200);
        // }else if(info == -2){
        //     req.session.error = "工号重复，请检查您的工号！";
        //     // alert("工号重复！");
        //     res.sendStatus( 404 );
        // }else {
        //     // alert("工号不对！");
        //     res.sendStatus( 404 );
        // }
        res.send(info);
    })   
}


exports.teacher_mycourse=(req,res)=>{
    tdb.getTeachercourse(req.session,function(arr){
        res.render("Teacher_my_cuorse",{"arr":arr})
    })
};