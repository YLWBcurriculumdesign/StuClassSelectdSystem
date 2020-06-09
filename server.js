let express = require("express");
var bodyParser = require('body-parser')
let index = require("./controllers/index")
let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 通过req.body得到客户端传递过来的数据
app.set("view engine","ejs")
app.use(express.static( 'public/css'))
app.use(express.static( 'public/img'))

app.get("/",index.showIndex)
app.post("/index",index.dologin)

app.listen(3000,()=>{
    console.log("服务器启动了~")
})