let express = require("express");
var bodyParser = require('body-parser');
let app = express();
let index = require("./controllers/index")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 // app.use(bodyParser.text());
 // app.use(bodyParser.raw())
 // app.use(bodyParser.urlencoded)
;
app.set("view engine","ejs");
app.use(express.static( 'public/css'));
app.use(express.static( 'public/img'));

app.get("/",index.showIndex);
app.post("/index",index.dologin);

app.listen(3000,()=>{
    console.log("服务器启动了~")
});