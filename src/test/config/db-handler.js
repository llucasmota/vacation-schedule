import mongoose, { startSession } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoServer = new MongoMemoryServer();

module.exports.connect = async () => {
  const uri = await mongoServer.getConnectionString();
  const mongooseOpts = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
  };
  await mongoose.connect(uri, mongooseOpts);
};
