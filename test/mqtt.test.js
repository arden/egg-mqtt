'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/mqtt.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/mqtt-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, mqtt')
      .expect(200);
  });
});
