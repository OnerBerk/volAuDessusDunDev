import express, { Response, NextFunction, Request } from 'express';

export const Hello = (req: Request, res: Response) => {
  res.send('Welcome to OnaAir api-rest');
};
