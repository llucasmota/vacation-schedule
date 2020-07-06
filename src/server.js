import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import routes from './app/routes';
import AppError from './app/Errors/AppError';
import databaseConfig from './app/database/index';
import 'express-async-errors';

dotenv.config();
mongoose.connect(databaseConfig.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();

app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  return res
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' });
});

const mongoConnect = async () => {
  await mongoose.connect(databaseConfig.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
mongoConnect().catch(error => console.error(error));

// subindo o server
app.listen(3333);
