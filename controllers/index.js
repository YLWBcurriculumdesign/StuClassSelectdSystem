let db = require("../models/db")
exports.showIndex = (req,res)=>{
    res.render("index")
}
exports.dologin = (req,res)=>{

    db.LOGIN(req.body,function(info){
        if (info==1){
            var user={
                username:req.body.username,
                password:req.body.password
            }
            req.session.user = user;
            res.send(200);
        }else {
            req.session.error = "用户名或密码不正确";
            res.send( 404 );
        }
    })
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
}
