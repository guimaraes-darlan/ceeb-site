import jwt from 'jsonwebtoken';

export const validateToken = (request: Request): boolean => {
  const token = request.headers.get('authorization');
  if (!token) return false;

  const parts = token.split(' ');
  const bearerToken = parts[1];

  const key = process.env.JWT_SECRET || 'key';
  try {

    jwt.verify(bearerToken, key);
    return true;
  } catch (error) {
    return false;
  }
}