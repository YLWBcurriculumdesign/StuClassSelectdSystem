var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '39.101.177.156',
    user     : 'root',
    password : '555500',
    database : 'studentsclass'
});
function save(data,callback) {
    console.log(data.name);
    connection.connect();

    var  sql =  'SELECT * FROM admin WHERE Aname="'+data.name+'"';
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            callback("-1");
            return;
        }else {
            console.log(result[0].Apassword)
            if (result[0].Apassword == data.pwd){
                console.log("ok");
                callback("1")
            }else {
                console.log("no");
                callback("-1");
            }
        }

    });

}
 exports.save = save;  // 导出