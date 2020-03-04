let config = require('../server/db_connect');

let create_table = () => {
  config.db_connect().query("create table IF NOT EXISTS shop_details(id int auto_increment primary key, gst_no varchar(30), shop_name varchar(30), address varchar(200))");
}

module.exports = {
  create_table: create_table
}
