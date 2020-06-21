function add(data, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();


    var addSql = 'INSERT INTO teacher(Tid,Tname,Tpassword,Tsex,Introduction) VALUES(?,?,?,?,?)';
    // var  addSqlParams = ['8888','王老师', "123456",'男', 'CN'];
    var addSqlParams = [data.tnumber, data.tname, data.tpwd, data.tsex, data.tintroduction];


    //增
    connection.query(addSql, addSqlParams, function (err, result) {
        console.log(addSql);
        if (err) {
            var str = err.message;
            console.log(str.substring(0, 12));
            var substr = str.substring(0, 12);
            if (substr == "ER_DUP_ENTRY") {
                var err = err.message;
                callback("-2");
                connection.end();
            } else {

                console.log('[INSERT ERROR] - ', err.message);
                callback("-1");
                connection.end();
            }
        } else {
            console.log(result);
            console.log(data);
            connection.end();
            callback("1")
        }
    });

}

//老师修改个人信息
function UPDATE(data, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE teacher SET Tname = ?,Tsex = ?,Introduction = ? WHERE Tid = ?';
    var updataSqlParams = [data.Tname, data.Tsex, data.Introduction, data.Tid];
    connection.query(updataSql, updataSqlParams, function (err, result) {
        if (err) {
            var str = err.message;
            console.log(str);
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}
exports.UPDATE = UPDATE;  // 导出


//老师更改密码
function UPDATEpwd(data, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE teacher SET Tpassword = ? WHERE Tid = ?';
    var updataSqlParams = [data.Tpwd, data.Tid];

    connection.query(updataSql, updataSqlParams, function (err, result) {
        if (err) {
            var str = err.message;
            console.log(str);
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}
exports.UPDATEpwd = UPDATEpwd;  // 导出

//老师更改课程
function UPDATEcour(data, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE course SET Cname = ?,Ctype = ?,Cweek = ?,Ctime = ?,Cintroduction = ? WHERE Cid = ? and Cteacher = ?';
    var updataSqlParams = [data.Cname, data.Ctype, data.Cweek, data.Ctime, data.Cintroduction, data.Cid, data.Tid];

    connection.query(updataSql, updataSqlParams, function (err, result) {
        if (err) {
            var str = err.message;
            console.log(str);
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}
exports.UPDATEcour = UPDATEcour;  // 导出

function getTeacher(session, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var sql = 'SELECT * FROM teacher WHERE TID=' + session.user.username;
    //查
    connection.query(sql, function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}
function getTeachercourse(session, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var sql = 'SELECT * FROM course WHERE Cteacher=' + session.user.username;
    //查
    connection.query(sql, function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });
}
//教师删除课程
function deletecourse(data, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var updataSql = 'DELETE FROM course WHERE Cid = ? ';
    var updataSqlParams = [data.Cid];

    connection.query(updataSql, updataSqlParams, function (err, result) {

        if (err) {
            var str = err.message;
            console.log(str);
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}
//管理员查询所有教师
function getTeachers(callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var sql = 'SELECT * FROM teacher';
    //查
    connection.query(sql, function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}
//管理员删除教师信息
function deletetea(data, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();
    var deletestudentSql = 'DELETE FROM teacher WHERE Tid=?';
    var deletestudentSqlParams = [data.Tid];

    connection.query(deletestudentSql, deletestudentSqlParams, function (err, result) {

        if (err) {
            var str = err.message;
            console.log(str);
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}

//教师添加课程
function addC(data, username, callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '39.101.177.156',
        user: 'root',
        password: '555500',
        database: 'studentsclass'
    });
    connection.connect();

    var addSql = 'INSERT INTO course(Cid,Cname,Ctype,Cweek,Ctime,Cintroduction,Cteacher) VALUES(?,?,?,?,?,?,?)';
    // var  addSqlParams = ['8888','王老师', "123456",'男', 'CN'];
    var addSqlParams = [data.cnumber, data.cname, data.ctype, data.cweek, data.ctime, data.cintroduction, username];
    console.log(username)


    //增
    connection.query(addSql, addSqlParams, function (err, result) {
        console.log(addSql);
        if (err) {
            var str = err.message;
            console.log(str.substring(0, 12));
            var substr = str.substring(0, 12);
            if (substr == "ER_DUP_ENTRY") {
                var err = err.message;
                callback("-2");
                connection.end();
            } else if (substr == "ER_NO_REFERE") {
                var err = err.message;
                callback("-3");
                connection.end();
            } else {

                console.log('[INSERT ERROR] - ', err.message);
                callback("-1");
                connection.end();
            }
        } else {
            console.log(result);
            console.log(data);
            connection.end();
            callback("1")
        }
    });
}

exports.addC=addC;
exports.getTeachercourse = getTeachercourse;
exports.getTeacher = getTeacher;
exports.add = add;
exports.deletecourse = deletecourse;
exports.getTeachers = getTeachers;
exports.deletetea = deletetea;
