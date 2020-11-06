import express from 'express';

import authController from '../controllers/auth';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/reset-password/:token', authController.restPassword);
router.post('/forgot-password', authController.forgotPassword);

export default router;
