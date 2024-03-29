import passport from 'passport';

const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');
const GithubStrategy = require('passport-github-oauth20');

import facebookConfig from './facebook-config';
import googleConfig from './google-config';
import db from '../sequelize/models';
import githubConfig from './github-config';

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
      const socialUser = {
        firstname: profile.name.familyName,
        lastname: profile.name.givenName,
        email: profile._json.email,
        password: 'sksksk'
      };
      const user = await db.User.findOne({ where: { email: socialUser.email } });
      if (user != null) {
        return done(null, { lastname: user.lastname, firstname: user.firstname, email: user.email, accessToken });
      } else {
        await db.User.create(socialUser);
        return done(null, { lastname: socialUser.lastname, firstname: socialUser.firstname, email: socialUser.email });
      }
    }
  )
);

passport.use(
  'github',
  new GithubStrategy(
    {
      clientID: githubConfig.githubAuth.clientID,
      clientSecret: githubConfig.githubAuth.clientSecret,
      callbackURL: githubConfig.githubAuth.callbackURL,
      passToCallBack: true
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      const socialUser = {
        firstname: profile.displayName,
        lastname: '',
        email: profile._json.email || 'default@mail.com',
        password: 'sksksk'
      };

      const user = await db.User.findOne({ where: { email: socialUser.email } });
      if (user != null) {
        return done(null, { lastname: user.lastname, firstname: user.firstname, email: user.email, accessToken });
      } else {
        await db.User.create(socialUser);
        return done(null, { lastname: socialUser.lastname, firstname: socialUser.firstname, email: socialUser.email });
      }
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
