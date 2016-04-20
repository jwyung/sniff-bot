var express = require('express');
var fs = require('fs');
var path = require('path');
var PORT = process.env.PORT || 3000;
var HELLO_PATH = path.join(__dirname, 'build', 'hello.min.js');

express()
  .use(hello)
  .listen(PORT, onListen);

function hello(req, res, next) {
  res.sendFile(HELLO_PATH);
}

function onListen() {
  console.log('Listening on', PORT);
}
