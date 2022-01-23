import passport from 'passport';

const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');

import facebookConfig from './facebook-config';
import googleConfig from './google-config';
import { Response } from 'express';

passport.use(
  'facebook',
  new FacebookStrategy(
    {
      clientID: facebookConfig.facebookAuth.clientID,
      clientSecret: facebookConfig.facebookAuth.clientSecret,
      callbackURL: facebookConfig.facebookAuth.callbackURL
    },
    async (accessToken: string, refreshToken: string, profile: any, done: any) => {
      return done(null, profile);
    }
  )
);

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: googleConfig.googleAuth.clientID,
      clientSecret: googleConfig.googleAuth.clientSecret,
      callbackURL: googleConfig.googleAuth.callbackURL,
      passToCallBack: true
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      return done(null, { profile: profile, token: accessToken });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  // @ts-ignore
  done(null, user);
});
