import { NextFunction, Request, Response } from 'express';
import { body, check, validationResult } from 'express-validator';

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: any = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

const regiterValidator = () => {
  const validPassword = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$');
  return [
    body('firstname').notEmpty().withMessage('firstname is required').not(),
    body('lastname').notEmpty().withMessage('firstname is required').not(),
    body('email').isEmail().withMessage('must be a valid email').notEmpty().withMessage('email is required').not(),
    body('password')
      .notEmpty()
      .withMessage('password is required')
      .matches(validPassword)
      .withMessage('password must have 8 characters with one upperCase , one letter and 1 special character  ')
  ];
};

module.exports = { regiterValidator, validate };
