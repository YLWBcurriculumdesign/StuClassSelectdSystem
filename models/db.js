//js中，函数是基本的值类型之一，可以用于函数的参数
function LOGIN(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();

    var  sql =  'SELECT * FROM '+data.findby+' WHERE '+data.findname+'="'+data.username+'"';
    console.log(sql);
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
                console.log(result) ;//打印在这
                if (data.type=="1"){
                    if (result[0].StudentPWD == data.password){
                        connection.end();
                        callback("1")
                    }else {
                        connection.end();
                        callback("-1");
                    }
                }
                if (data.type=="2"){
                    if (result[0].Tpassword == data.password){
                        connection.end();
                        callback("1")
                    }else {
                        connection.end();
                        callback("-1");
                    }
                }
                if (data.type=="0"){
                    if (result[0].Apassword == data.password){
                        connection.end();
                        callback("1")
                    }else {
                        connection.end();
                        callback("-1");
                    }
                }

            }

        }

    });

}

//打印教师
function getTeacher(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM teacher';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}
//打印单个教师
function getaTeacher(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM teacher WHERE TID='+data.Tid;
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);
    });
}


//打印学生

function getStudent(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM studata';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}




//打印课程
function getCourse(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'select * from course,teacher where  course.Cteacher=teacher.Tid';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}



 exports.LOGIN = LOGIN;  // 导出
exports.getTeacher=getTeacher;//管理员--教师信息
exports.getaTeacher=getaTeacher;//管理员--一个教师信息
exports.getStudent=getStudent;//管理员--学生信息
exports.getCourse=getCourse;//管理员--学生信息