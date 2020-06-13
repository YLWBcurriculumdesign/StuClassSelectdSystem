var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '39.101.177.156',
    user     : 'root',
    password : '555500',
    database : 'studentsclass'
});
connection.connect();
var  sql = 'SELECT * FROM studata WHERE StudentID=171405';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);

    console.log('------------------------------------------------------------\n\n');
    // console.log(result[0].Tid);
    // console.log(result[3].Tid);
});