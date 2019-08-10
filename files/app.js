'use strict';

// from demo

const net = require('net');

const client = new net.Socket();

client.connect(3001, '172.16.0.231', () => console.log('connected') );

client.on('data', function(data) {
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('close', function() {
  console.log('Connection Closed');
});