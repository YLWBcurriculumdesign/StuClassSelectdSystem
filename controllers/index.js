let db = require("../models/db");
exports.showIndex = (req,res)=>{
    res.render("index")
};
exports.dologin = (req,res)=>{
   // console.log(req.body.username);
   db.save(req.body,function(info){
        res.send(info)
    })
};
