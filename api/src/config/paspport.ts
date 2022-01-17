import passport from 'passport';

const LocalStrategy = require('passport-local').Strategy;
import bcrypt from 'bcrypt';

const User = require('../sequelize/models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    // @ts-ignore
    done(null, user);
  });
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: true
      },
      async function (username: string, password: string, done: any) {
        console.log(`trying to log in as ${username}`);
        const user = await User.findOne({ where: { email: username } });
        if (!user) {
          return done(null, false);
        }
        bcrypt.compare(password, user.password, function (err, res) {
          if (res) {
            console.log('successful login');
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    )
  );
};
