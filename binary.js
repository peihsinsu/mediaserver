var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');

var server = BinaryServer({port: 9000});

var videofile = '/home/backup/upload/Upload/Media/91dc797a-da69-4bc1-a4eb-98fcc87df91f/026_15mins_經驗法則.mp4';
server.on('connection', function(client){   
  var file = fs.createReadStream(videofile);
  client.send(file); 
});
