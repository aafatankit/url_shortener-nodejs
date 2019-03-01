const mysql = require('mysql2');

const con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nanophp',
    password: '',
    port: '3306'
});

module.exports = con.promise();