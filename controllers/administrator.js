let sdb = require("../models/sdb")
let cdb = require("../models/cdb")
exports.showRegS = (reg,res)=>{
    res.render("regS")
}

exports.showRegC = (reg,res)=>{
    res.render("regC")
}

exports.doRegS = (req,res)=>{
    console.log(req.body)
    sdb.add(req.body,function(info){
        res.send(info);
    })
}

exports.doRegC = (req,res) =>{
    console.log(req.body)
    cdb.add(req.body,function(info){
        res.send(info);
    })
}