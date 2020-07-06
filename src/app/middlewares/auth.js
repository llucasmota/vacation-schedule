import jwt from 'jsonwebtoken';
// importado para que pudesse utilizar promise
import { promisify } from 'util';

import authConfig from '../config/auth';

import AppError from '../Errors/AppError';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token not provided', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.user_id;
    // após decodificação recupero o id que vem codificado no token
    return next();
  } catch (err) {
    throw new AppError('Token not provided', 401);
  }
};
