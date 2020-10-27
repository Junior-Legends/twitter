import _ from 'lodash';
import { Request, Response } from 'express';

import User from '../models/User';
import { dbAdditionalDocFields } from '../config';
import registerValidator from '../validators/register';
import loginValidator from '../validators/login';
import ResponseError from '../utils/responseError';
import asyncCatch from '../utils/asyncCatch';
import bcryptUtils from '../utils/cryptography';

const register = asyncCatch(async (req: Request, res: Response) => {
	const userData = req.body;
	const { validationError } = registerValidator(userData);
	if (validationError) {
		throw new ResponseError(validationError.message, 400);
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
	const { validationError } = loginValidator(userData);
	if (validationError) {
		throw new ResponseError(validationError.message, 400);
	}
	const { email, password } = userData;
	const user = await User.findOne({ email });
	if (!user) {
		throw new ResponseError('no user found with this email.', 404);
	}
	const pwdHash = user.password;
	const isPasswordCorrect = await bcryptUtils.comparePassword(
		password,
		pwdHash
	);
	if (!isPasswordCorrect) {
		throw new ResponseError('user password is not correct.', 401);
	}
	req.session.userId = user._id;

	return res.json({ user: _.omit(user.toObject(), dbAdditionalDocFields) });
});

export default { register, login };
