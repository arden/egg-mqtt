'use strict';

const assert = require('assert');
const mqtt = require('mqtt');

module.exports = app => {
  app.addSingleton('mqtt', createOneClient);
};

function createOneClient(config, app) {
  assert(config.host && config.port && config.clientId,
    `[egg-mqtt] 'host: ${config.host}', 'port: ${config.port}',  'clientId: ${config.database}' are required on config`);

  app.coreLogger.info('[egg-mqtt] connecting %s@%s:%s',
    config.clientId, config.host, config.port);

  const client = mqtt.connect({
    host: config.host,
    port: config.port,
    username: config.user,
    password: config.password,
    keepalive: config.keepalive,
    clientId: config.clientId,
    clean: config.clean,
    connectTimeout: config.connectTimeout,
  });

  app.beforeStart(function* () {
    app.coreLogger.info('[egg-mqtt] start successfully and server status is ok');
  });
  return client;
}
