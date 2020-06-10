let tdb = require("../models/Tdb")
exports.showRegister = (req,res)=>{
    res.render("regT")
}

exports.doRegister = (req,res)=>{
    console.log(req.body)
    tdb.add(req.body,function(info){
        if (info==1){
            
            res.send(200);
        }else {
            req.session.error = "用户名或密码不正确";
            res.sendStatus( 404 );
        }
    })   
}