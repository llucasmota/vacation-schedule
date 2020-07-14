const { describe, it } = require('mocha');

const request = require('supertest');

const app = ;

describe('Deve ser possível criar um usuário', () => {
  it('POST /users', () => {
    request(app)
      .post('/users')
      .expect(200);
  });
});
