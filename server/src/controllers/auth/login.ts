import lodashOmit from 'lodash/omit';
import { Request, Response } from 'express';

import { dbAdditionalDocFields } from '../../config';
import loginWithEmailValidator from '../../validators/loginWithEmail';
import loginWithUsernameValidator from '../../validators/loginWithUsername';
import ResponseError from '../../utils/responseError';
import asyncCatch from '../../utils/asyncCatch';
import bcryptUtils from '../../utils/cryptography';
import UserRepository from '../../repository/userRepository';
import { ValidationError } from 'fastest-validator';
import { MongooseUserDoc } from '../../models/mongooseUserModel';

const login = asyncCatch(async (req: Request, res: Response) => {
	const userData = req.body;
	let validationError: ValidationError;
	if (userData.username && userData.email) {
		return res.status(400).json({
			error: {
				message: 'email and username can not provided at the same time.',
			},
		});
	} else if (userData.username) {
		validationError = loginWithUsernameValidator(userData).validationError;
	} else if (userData.email) {
		validationError = loginWithEmailValidator(userData).validationError;
	} else {
		return res
			.status(400)
			.json({ error: { message: 'email or username is required.' } });
	}
	if (validationError) {
		throw new ResponseError(validationError.message, 400);
	}
	const { email, username, password } = userData;
	let user: MongooseUserDoc;
	if (username) {
		user = await UserRepository.findOne({ username });
	} else if (email) {
		user = await UserRepository.findOne({ email });
	}
	if (!user) {
		throw new ResponseError('no user found with this email/username.', 404);
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

	return res.json({ user: lodashOmit(user.toObject(), dbAdditionalDocFields) });
});

export default login;
