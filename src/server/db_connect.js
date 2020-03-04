var config = require('./config').config;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: config.db_url_mysql.host,
  user: config.db_url_mysql.user,
  password: config.db_url_mysql.password,
  database: config.db_url_mysql.database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  require('../models/shop_details').create_table();
});

let db_connect = () => {
  return con;
}

module.exports = {
  db_connect: db_connect
}
