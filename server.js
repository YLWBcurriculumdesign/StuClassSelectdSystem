let express = require("express");
let students = require("./controllers/students")
let app = express();
app.use(express.static( 'public/css'))

app.set("view engine","ejs")

app.get("/",students.showIndex)

app.listen(3000,()=>{
    console.log("服务器启动了~")
})