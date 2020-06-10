let tdb = require("../models/Tdb")
exports.showRegister = (req,res)=>{
    res.render("regT")
}

exports.doRegister = (req,res)=>{
    console.log(req.body)
}