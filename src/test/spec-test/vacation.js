const { describe, it } = require('mocha');

const request = require('supertest');

const app = 'http://localhost:3333';

describe('Users', () => {
  it('GET /users', () => {
    request(app)
      .get('/users')
      .expect(200);
    // .then(response => {
    //   const users = response.body;
    //   users.map(({ name }) => );
    // });
  });
});
