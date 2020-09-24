import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { beforeAll, afterAll, jasmine, describe, it, expect } from 'jest';
import dbHandler from './config/db-handler';
// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
const opts = { useMongoClient: true }; // remove this option if you use mongoose 5 and above
beforeAll(async () => {
  const mongooseServer = dbHandler();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('...', () => {
  it('...', async () => {
    const User = mongoose.model('User', new mongoose.Schema({ name: String }));
    const count = await User.count();
    expect(count).toEqual(0);
  });
});
