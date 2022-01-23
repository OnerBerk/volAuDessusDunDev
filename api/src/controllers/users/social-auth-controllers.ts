import { Request, Response } from 'express';
import passport from 'passport';

export const SocialLogin = (strategy: string) => {
  return passport.authenticate(strategy, { scope: ['profile'] });
};

export const SocialCallback = (strategy: string) => {
  return passport.authenticate(strategy, {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'http://localhost:8080/api/v1/socialLogin/failed'
  });
};

export const SocialLoginSuccess = (req: Request, res: Response) => {
  if (req.user) {
    res.json({ user: req.user });
  }
};
export const SocialLoginFailed = (req: Request, res: Response) => {
  if (req.user) {
    res.status(401).json({
      success: false,
      message: 'logged with google failed'
    });
  }
};

export const SocialLogout = (req: Request, res: Response) => {
  req.session.destroy(() => console.log('session finished'));
  req.logout();
  res.send('Bye!!');
};
