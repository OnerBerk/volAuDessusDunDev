require('dotenv').config();
import express from 'express';
import session from 'express-session';
import passport from 'passport';

import db from './sequelize/models';

const cors = require('cors');
const global_routes = require('./routes/global-routes');
const users_routes = require('./routes/users-routes');

const app = express();
const PORT = 8080 || process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: 'yokkokeokeokeok',
    saveUninitialized: true,
    resave: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/v1', global_routes);
app.use('/api/v1', users_routes);

app.listen(PORT, () => {
  console.log(`onAir listen on ${PORT}`);
});
db.sequelize.sync().then(() => console.log('Onair database is connected'));
