var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'classmysql.engr.oregonstate.edu',
  user: 'cs340_fossta',
  password: '6308',
  database: 'cs340_fossta'
});
module.exports.pool = pool;
