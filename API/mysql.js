const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "root",
    "password": "brunoo00",
    "database": "eldoradoDB",
    "host": "mysqlserver.copplfbc2czk.sa-east-1.rds.amazonaws.com",
    "port": 3306
});

exports.pool = pool;