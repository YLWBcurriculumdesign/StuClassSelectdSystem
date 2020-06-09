// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : '39.101.177.156',
//   user     : 'root',
//   password : '555500',
//   database : 'studentsclass'
// });
// connection.connect();
//
// var  sql = 'SELECT Apassword FROM admin where Aname="liwei"';
//
// //查
// // var  sql = 'SELECT * FROM admin '
// connection.query(sql,function (err, result) {
//     if(err){
//         console.log('[SELECT ERROR] - ',err.message);
//         return;
//     }
//
//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     var temp=new String(result[0].Apassword)
//     console.log(temp.toString());
//     console.log("a");
//     console.log('------------------------------------------------------------\n\n');
// // });
// connection.end();
// function toologin(data,callback) {
//     var mysql      = require('mysql');
//     var connection = mysql.createConnection({
//         host     : '39.101.177.156',
//         user     : 'root',
//         password : '555500',
//         database : 'studentsclass'
//     });
//     connection.connect();
//     var  sql = 'SELECT Apassword FROM admin where Aname="liwei"';
//     connection.query(sql,function (err, result) {
//         if(err){
//             callback("-1");
//             connection.end();
//             return;
//         }
//         var password = "555500";
//         if(password == result[0].Apassword){
//             console.log("ok");
//            callback("1");
//             connection.end();
//         }else {
//             console.log("no");
//             callback("-1");
//             connection.end();
//         }
//  });
//
// }

function toologin(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT Apassword FROM admin where Aname=data.name';
    connection.query(sql,function (err, result) {
        if(err){
            callback("-1");
            connection.end();
            return;
        }else {
        var password = data.pwd;
        if(password == result[0].Apassword){
            console.log("ok");
            callback("1");
            connection.end();
        }else {
            console.log("no");
            callback("-1");
            connection.end();
        }}
    });

}
exports.toologin = toologin();  // 导出