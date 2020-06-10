
function save(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();

    var  sql =  'SELECT * FROM admin WHERE Aname="'+data.username+'"';
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            connection.end();
            callback("-1");
        }else {
            if(result[0]==null){
                connection.end();
                callback("-1")
            }else {
                if (result[0].Apassword == data.password){
                    connection.end();
                    callback("1")
                }else {
                    connection.end();
                    callback("-1");
                }
            }

        }

    });

}
 exports.save = save;  // 导出