// var mysql  = require('mysql');
//
// var connection = mysql.createConnection({
//     host     : '39.101.177.156',
//     user     : 'root',
//     password : '555500',
//     database : 'studentsclass'
// });
//
// connection.connect();
// var  sql = 'SELECT * FROM admin where Aname="liwe"';
// //查
// connection.query(sql,function (err, result) {
//     if(err){
//         console.log('[SELECT ERROR] - ',err.message);
//         return;
//     }
// if(result[0]==null){    console.log(" 0000");}
//
//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');
// });

connection.end();
// var  addSql = 'INSERT INTO teacher(Tid,Tname,Tpassword,Tsex,Introduction) VALUES(888,?,?,?,?)';
// var  addSqlParams = ['王老师', "123456",'男', 'CN'];
// //增
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });
 
// connection.end();