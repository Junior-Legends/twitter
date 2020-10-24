import express from 'express';

import authController from '../controllers/auth';

const router = express.Router();

router.use(express.json({ limit: '4kb' }));

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
