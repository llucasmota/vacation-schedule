import dotenv from 'dotenv';

dotenv.config();
module.exports = {
  secret: process.env.APP_SECRET,
  ttl: 86400,
};
