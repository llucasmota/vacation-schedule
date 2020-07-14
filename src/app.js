import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './app/routes';

import AppError from './app/Errors/AppError';
import databaseConfig from './app/database/index';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  console.log(err.message);
  return res
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' });
});
mongoose.connect(databaseConfig.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default app;
