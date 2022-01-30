import { Router } from 'express';
import {
  SocialCallback,
  SocialLogin,
  SocialLoginFailed,
  SocialLoginSuccess,
  SocialLogout
} from '../controllers/users/social-auth-controllers';
import { isLoggedIn } from '../utils/is-logged-in/is-logged-in';

const { regiterValidator, validate } = require('../utils/validator/validator');

const router = Router();
const userController = require('../controllers/users/users-controller');

router.get('/auth/google', SocialLogin('google'));
router.get('/auth/google/callback', SocialCallback('google'));

router.get('/auth/github', SocialLogin('github'));
router.get('/auth/github/callback', SocialCallback('github'));

router.get('/auth/facebook', SocialLogin('facebook'));
router.get('/auth/facebook/callback', SocialCallback('facebook'));

router.get('/socialLogin/success', SocialLoginSuccess);
router.get('/socialLogin/failed', SocialLoginFailed);
router.get('/socialLogin/logout', SocialLogout);

router.post('/registration', regiterValidator(), validate, userController.Registration);
router.post('/login', userController.Login);

router.get('/socialUser', isLoggedIn, userController.getSocialUser);

module.exports = router;
