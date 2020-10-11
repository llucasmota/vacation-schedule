const { describe, expect, test } = require('@jest/globals');

const request = require('supertest');

const app = 'http://localhost:3333';

describe('Users Suite /users', () => {
  test('users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    response.body.forEach(item => {
      expect(item).toHaveProperty('user_id');
      expect(item).toHaveProperty('_id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('cpf');
      expect(item).toHaveProperty('email');
      expect(item).toHaveProperty('password');
      expect(item).toHaveProperty('dateContractStart');
    });
  });
});
