var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '39.101.177.156',
  user     : 'root',
  password : '555500',
  database : 'studentsclass'
});

connection.connect();

var  sql = 'SELECT * FROM admin';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();