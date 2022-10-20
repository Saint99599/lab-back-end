const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    database: 'student_app',
    port: 3306,
    user: 'root',
    password: '1212312121',
});

connect.connect;
module.exports = connect;