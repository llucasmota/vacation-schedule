/* eslint-disable camelcase */
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import authConfig from '../config/auth';

const User = new mongoose.Schema({
  /**
   * O Controller gera um uuid para este campo
   */
  user_id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// eslint-disable-next-line func-names
User.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 8);
});
User.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  },
};

User.statics = {
  generateToken(user_id) {
    // gera token de acordo como id
    return jwt.sign({ user_id }, authConfig.secret, {
      // informa o que terá no jwt: o id do user, nome da aplicação
      expiresIn: authConfig.ttl, // em quanto tempo expira
    });
  },
};
export default mongoose.model('User', User);
