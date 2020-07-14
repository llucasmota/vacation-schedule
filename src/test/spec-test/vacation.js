const { describe, it } = require('mocha');
const express = require('express');

const request = require('supertest');

const app = express();

describe('Deve ser possível criar um usuário', () => {
  it('POST /users', () => {
    request(app)
      .post('/users')
      .send({
        name: 'Guts',
        cpf: '02912345678',
        email: 'guts.berserk@gmail.com',
        password: '123456',
      })
      .expect(200);
  });
});
