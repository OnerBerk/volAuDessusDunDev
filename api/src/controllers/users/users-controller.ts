import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { IUser } from '../../interfaces/interfaces';
import db from '../../sequelize/models';
import { where } from 'sequelize';

const User = require('../../sequelize/models/user');

const Registration = async (req: Request, res: Response) => {
  const password = req.body.password;
  const hash = await bcrypt.hash(password, bcrypt.genSaltSync(10));

  const user: IUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hash
  };
  await db.User.create(user)
    .then((response: any) => {
      res.json({
        message: `${response.firstname} ${response.lastname} is created`
      });
    })
    .catch((e: any) => {
      res.send({ error_message: e });
    });
};

const Login = async (req: Request, res: Response) => {
  const auth = {
    email: req.body.email,
    password: req.body.password
  };
  console.log(auth.email);
  const user = await db.User.findOne({ where: { email: auth.email } });
  if (user === null) {
    res.json({ err: 'this user does not exist' });
  } else {
    res.json({ user: user });
  }
};

module.exports = {
  Registration,
  Login
};
