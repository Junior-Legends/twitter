import bcrypt from 'bcryptjs';
import _ from 'lodash';
import { Request, Response } from 'express';

import User from '../models/User';
import registerValidator from '../validators/register';
import { dbAdditionalDocFields } from '../config';
import loginValidator from '../validators/login';
import ResponseError from '../utils/responseError';
import asyncCatch from '../utils/asyncCatch';

const register = asyncCatch(async (req: Request, res: Response) => {
	const userData = req.body;
	const validationErrors = registerValidator(userData);
	if (typeof validationErrors !== 'boolean') {
		throw new ResponseError(validationErrors[0].message, 401);
	}
	const { email } = userData;
	const userExists = await User.findOne({ email });
	if (userExists) {
		throw new ResponseError('there is already a user with this email', 409);
	}
	const user = await User.create(userData);
	req.session.userId = user._id;

	return res.json({ user: _.omit(user.toObject(), dbAdditionalDocFields) });
});

const login = asyncCatch(async (req: Request, res: Response) => {
	const userData = req.body;
	const validationErrors = loginValidator(userData);
	if (typeof validationErrors !== 'boolean') {
		throw new ResponseError(validationErrors[0].message, 401);
	}
	const { email, password } = userData;
	const user = await User.findOne({ email });
	if (!user) {
		throw new ResponseError('no user found with this email.', 404);
	}
	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) {
		throw new ResponseError('user password is not correct.', 401);
	}
	req.session.userId = user._id;

	return res.json({ user: _.omit(user.toObject(), dbAdditionalDocFields) });
});

export default { register, login };
