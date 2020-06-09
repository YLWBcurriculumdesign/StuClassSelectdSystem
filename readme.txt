李伟 杨利晨 毕丰旺 王顺 
day day up


<script>
    dosave =function () {
        var userName = encodeURIComponent(document.querySelector("#user").value);
        var pwd = encodeURIComponent(document.querySelector("#password").value);
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : '39.101.177.156',
            user     : 'root',
            password : '555500',
            database : 'studentsclass'
        });
        connection.connect();
        var sql = "select * from admin where Aname = '"+name+"' and Apassword = '"+pwd+"'";
        connection.query(sql,function (err, result) {
            if(err){
                alert("账号不存在");
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            if(pwd == result.Aname){
                alert("登录成功");
            }else {
                alert("账号密码错误");
            }

            console.log('--------------------------SELECT----------------------------');
            console.log(result);
            console.log('------------------------------------------------------------\n\n');
        });

    }
</script>