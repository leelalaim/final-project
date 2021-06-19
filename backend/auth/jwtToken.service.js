import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const jwtService = {

  createAuthToken(userId) {
    return jwt.sign({ id: userId }, process.env.TOKEN_SECRET);
  },

  getAuthTokenData(token) {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  }
}