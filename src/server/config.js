let environment = "dev";

let serverURLS = {
  "dev": {
    "SERVER_URL": "http://localhost",
    "SERVER_PORT": "3000",
    "SERVER_HOST": "localhost",
    "SERVER_USERNAME": "root",
    "SERVER_PASSWORD": "",
    "SERVER_DATABASE": "palanichamy_textiles"
  }
}

let dbConfig = {
  "db_url_mysql": {
    "host": `${serverURLS[environment].SERVER_HOST}`,
    "user": `${serverURLS[environment].SERVER_USERNAME}`,
    "password": `${serverURLS[environment].SERVER_PASSWORD}`,
    "database": `${serverURLS[environment].SERVER_DATABASE}`
  },
  "server_port": {
    "port": `${serverURLS[environment].SERVER_PORT}`
  },
  "server_url": {
    "url": `${serverURLS[environment].SERVER_URL}`
  }
}

module.exports = {
  config: dbConfig
};
