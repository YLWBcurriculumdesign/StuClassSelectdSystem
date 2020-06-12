function add(data,callback) {
    var mysql  = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    
    
    var  addSql = 'INSERT INTO studata(StudentID,StudentName,StudentSex,Studentpwd,StudentAge,college,major) VALUES(?,?,?,?,?,?,?)';
    // var  addSqlParams = ['171408','李俊', "男",'123465', '20','信息工程学院','物联网'];
    var addSqlParams = [data.snumber,data.sname,data.ssex,data.spwd,data.sage,data.scollege,data.smajor];
    
    
    //增
    connection.query(addSql,addSqlParams,function (err, result) {
        console.log(addSql);
            if(err){
                var str = err.message;
                console.log(str.substring(0,12));
                var substr = str.substring(0,12);
                if(substr == "ER_DUP_ENTRY" ){
                    var err = err.message;
                    callback("-2");
                    connection.end();
                }else{
                    
                    console.log('[INSERT ERROR] - ',err.message);
                    callback("-1");
                    connection.end();
            }
            }else {
                console.log(result)
                console.log(data)
                connection.end();
                callback("1")
            }        
    });
    
    }


    exports.add = add;

//学生修改个人信息
function UPDATA(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE studata SET StudentName = ?,StudentSex = ?,StudentAge = ?,college = ?,major = ? WHERE StudentID = ?';
    var updataSqlParams = [data.stuname, data.stusex, data.stuage, data.college, data.major, data.stuid];

    connection.query(updataSql,updataSqlParams,function (err, result) {
        if(err){
            var str = err.message;
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}

exports.UPDATA = UPDATA;  // 导出