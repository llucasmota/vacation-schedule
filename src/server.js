import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';
import databaseConfig from './app/database/index';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(databaseConfig.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// subindo o server
app.listen(3333);
