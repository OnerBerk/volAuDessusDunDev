import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { IUser } from '../../interfaces/interfaces';
import db from '../../sequelize/models';
import { tokenGen } from '../../utils/token-gen/token-gen';
import { user } from '../../sequelize/seeders/users';

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
  if (auth.email != null || undefined) {
    const user: IUser = await db.User.findOne({ where: { email: auth.email } });
    if (user === null) {
      res.json({ err: 'this user does not exist' });
    } else {
      const isEqual = await bcrypt.compare(auth.password, user.password);
      if (!isEqual) {
        res.json({ err: 'Entries are incorrect' });
      } else {
        const token = tokenGen({ userId: user.id });
        res.json({ userId: user.id, token: token });
      }
    }
  } else {
    res.json({ err: 'entry are invalid' });
  }
};

module.exports = {
  Registration,
  Login
};
