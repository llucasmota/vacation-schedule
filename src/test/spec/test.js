const { response } = require('express');
const express = require('express');

const { describe, it } = require('mocha');

const request = require('supertest');

const app = 'http://localhost:3333';

describe('Users Suite /users', () => {
  it('users', done => {
    request(app)
      .get('/users')
      .expect(200, done);
  });
});
