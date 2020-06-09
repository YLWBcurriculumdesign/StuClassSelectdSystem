let express = require("express");
let app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let index = require("./controllers/index")
app.set("view engine","ejs")
app.use(express.static( 'public/css'))
app.use(express.static( 'public/img'))

app.get("/",index.showIndex)
app.post("/index",index.dologin)

app.get("/forgetPsw",index.showForget)

app.listen(3000,()=>{
    console.log("服务器启动了~")
})