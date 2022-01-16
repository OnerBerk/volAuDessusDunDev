import jwt from 'jsonwebtoken';

export const tokenGen = (user: any) => {
  return jwt.sign(user, process.env.SECRET as string, { expiresIn: '1d' });
};
