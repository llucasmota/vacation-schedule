import jwt from 'jsonwebtoken';
// importado para que pudesse utilizar promise
import { promisify } from 'util';

import authConfig from '../config/auth';

import AppError from '../Errors/AppError';

export default async (req, res, next) => {
  /**
   * Recuperando dados do header Authorization
   */
  const authHeader = req.headers.authorization;
  /**
   * Exceção para o caso do cliente não informar um header de authorization
   */
  if (!authHeader) {
    throw new AppError('Token not provided', 401);
  }
  /**
   * Separo por espaço esse header, ou seja, descarto o "bearer" e defino o jwt na variável token
   */
  const [, token] = authHeader.split(' ');

  /**
   * Decodifico o jwt
   */
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.user_id;
    // após decodificação recupero o id que vem codificado no token
    return next();
  } catch (err) {
    throw new AppError('Token not provided', 401);
  }
};
