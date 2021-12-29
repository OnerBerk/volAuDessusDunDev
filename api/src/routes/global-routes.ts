import { Router } from 'express';
const router = Router();
import { Hello } from '../controllers/global-controllers/global-controller';

/* get */
router.route('/').get(Hello);

module.exports = router;
