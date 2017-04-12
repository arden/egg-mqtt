'use strict';

exports.mqtt = {
  client: {
    host: '127.0.0.1',
    port: 7000,
    user: 'arden',
    password: '123456',
    clientId: '0123456789',
    connectTimeout: 30 * 1000,
    keepalive: 5,
    clean: false,
  },
  agent:true
};

exports.keys = '123456';