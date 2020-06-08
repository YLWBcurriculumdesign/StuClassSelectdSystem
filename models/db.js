var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '39.101.177.156',
  user     : 'root',
  password : '555500',
  database : 'studentclass'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});