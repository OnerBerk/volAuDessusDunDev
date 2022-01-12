import { Request, Response, Router } from 'express';

const { regiterValidator, validate } = require('../utils/validator/validator');

const router = Router();
const userController = require('../controllers/users/users-controller');

router.post('/registration', regiterValidator(), validate, userController.Registration);
router.post('/login', userController.Login);

module.exports = router;
