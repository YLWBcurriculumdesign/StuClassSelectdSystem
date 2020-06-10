let tdb = require("../models/Tdb")
exports.showRegister = (req,res)=>{
    res.render("regT")
}

exports.doRegister = (req,res)=>{
    console.log(req.body)
    tdb.add(req.body,function(info){
        if (info==1){
            req.session.error = "工号重复，请检查您的工号！";
            res.sendStatus(200);
        }else if(info == -2){
            req.session.error = "工号重复，请检查您的工号！";
            alert("工号重复！")
            res.sendStatus( 404 );
        }else {
            res.sendStatus( 404 );
        }
    })   
}