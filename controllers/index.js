let db = require("../models/db");
let sdb = require("../models/sdb");
let Tdb = require("../models/Tdb");
exports.showIndex = (req,res)=>{
    res.render("index")
};
exports.dologin = (req,res)=>{

    db.LOGIN(req.body,function(info){
        if (info == 1){
            var user ={
                username:req.body.username,
                password:req.body.password
            };
            req.session.user = user;
            res.send(200);
        }else {
            req.session.error = "用户名或密码不正确";
            res.send( 404 );
        }
    });
    // var user={
    //     username:'admin',
    //     password:'admin'
    // }
    // if(req.body.username==user.username&&req.body.password==user.password)
    // {
    //     res.send(200);
    // }else{
    //     res.send( 404 );
    // }
};
exports.showForget=(req,res)=>{
    res.render("forgetPsw")
};

exports.showsuccess=(req,res)=>{
    if(req.session.user){
        res.render('success');
    }else{
        req.session.error = "请先登录";
        res.redirect('/');
    }
};

exports.showstudata=(req,res) =>{
    if(req.session.user){
        sdb.getStudent(req.session,function(arr){
            res.render("update",{"arr":arr})
        });
    }
};

exports.showstudent=(req,res) =>{
    if(req.session.user){
        sdb.getStudent(req.session,function(arr){
            res.render("Student",{"arr":arr})
        });
    }else{
        req.session.error = "请先登录";
        res.redirect('/');
    }
};

exports.showteacher=(req,res) =>{
    if(req.session.user){
        Tdb.getTeacher(req.session,function(arr){
            res.render("Teacher",{"arr":arr})
        });
    }else{
        req.session.error = "请先登录";
        res.redirect('/');
    }
};
exports.showadmin=(req,res) =>{
    if(req.session.user){
        db.getTeacher(function(arr){
            res.render("Admin",{"arr":arr})
        });
    }else{
        req.session.error = "请先登录";
        res.redirect('/');
    }
};


