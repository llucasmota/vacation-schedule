const { describe, it, beforeEach, before } = require('mocha');
const express = require('express');

const request = require('supertest');

const app = 'http://localhost:3333';

describe('Deve ser possível criar um usuário', () => {
  it('POST /users', done => {
    request(app)
      .post('/users')
      .send({
        name: 'Guts',
        cpf: '02912345618',
        email: 'guts.berserk@gmail.com',
        password: '123456',
      })
      .expect(200)
      .end(err => {
        if (err) return done(err);
        return done();
      });
  });
});
