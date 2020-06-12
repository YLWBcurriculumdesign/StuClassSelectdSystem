
let sdb = require("../models/sdb");

exports.showselect=(req,res)=>{
    res.render("Select_course")
};


//渲染一个处理学生修改个人信息的逻辑
exports.doupdate=(req,res)=>{
    console.log(req.body)
    sdb.UPDATA(req.body,function(info) {
        res.send(info);
    })
}

//渲染一个显示学生修改个人信息的页面
exports.update=(req,res)=>{
    res.render('update')
}
