let express = require("express");
let app = express();

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(3000,()=>{
    console.log("服务器启动了~")
})