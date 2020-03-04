let app = require('express')(),
server = require('http').Server(app),
bodyParser = require('body-parser'),
//cors = require('cors'),
path = require('path');

app.use(bodyParser.json());
//app.use(cors());

server.listen(3000, () => {
  console.log('app is listening 3000 port');
});
