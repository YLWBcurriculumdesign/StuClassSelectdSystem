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

exports.teacher_mycourse_up=(req,res)=>{
    tdb.getTeachercourse(req.session,function(arr){
        res.render("tea_update_course",{"arr":arr})
    })
};
//渲染一个处理老师修改密码的逻辑
exports.doupdatepwd=(req,res)=>{
    console(req.body);
    tdb.UPDATEpwd(req.body,function(info) {
        res.send(info);
    })
    // res.redirect("/update");
};

//渲染修改密码页面
exports.showteapwd=(req,res) =>{
    if(req.session.user){
        tdb.getTeacher(req.session,function(arr){
            res.render("T_update_password",{"arr":arr})
        });
    }
};

//渲染一个处理老师修改课程的逻辑
exports.doupdatecourse=(req,res)=>{
    tdb.UPDATEcour(req.body,function(info) {
        res.send(info);
    })
    // res.redirect("/update");
};
exports.teacher_mycourse_de=(req,res)=>{
    tdb.getTeachercourse(req.session,function(arr){
        res.render("Tea_delete_course",{"arr":arr})
    })
};
//渲染一个处理老师删除课程的逻辑
exports.dodeletecourse=(req,res)=>{
    tdb.deletecourse(req.body,function(info) {
        res.send(info);
    })
};