var express = require("express");
var app = express();

var vidStreamer = require("vid-streamer");

app.get("/*", vidStreamer);

app.listen(3000);
