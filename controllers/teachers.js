let tdb = require("../models/Tdb");
exports.showRegT = (req,res)=>{
    res.render("regT")
};

exports.doRegT = (req,res)=>{
    console.log(req.body);
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
};

//渲染一个处理老师修改个人信息的逻辑
exports.doupdate=(req,res)=>{
    tdb.UPDATE(req.body,function(info) {
        res.send(info);
    })
    // res.redirect("/update");
};

//渲染修改信息页面
exports.showteadata=(req,res) =>{
    if(req.session.user){
        tdb.getTeacher(req.session,function(arr){
            res.render("TEAupdate",{"arr":arr})
        });
    }
};

exports.teacher_mycourse=(req,res)=>{
    tdb.getTeachercourse(req.session,function(arr){
        res.render("Teacher_my_cuorse",{"arr":arr})
    })
};