import lodashOmit from 'lodash/omit';
import { Request, Response } from 'express';

import { dbAdditionalDocFields } from '../../config';
import loginValidator from '../../validators/login';
import ResponseError from '../../utils/responseError';
import asyncCatch from '../../utils/asyncCatch';
import bcryptUtils from '../../utils/cryptography';
import UserRepository from '../../repository/userRepository';

const login = asyncCatch(async (req: Request, res: Response) => {
	const userData = req.body;
	const { validationError } = loginValidator(userData);
	if (validationError) {
		throw new ResponseError(validationError.message, 400);
	}
	const { email, password } = userData;
	const user = await UserRepository.findOne({ email });
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

	return res.json({ user: lodashOmit(user.toObject(), dbAdditionalDocFields) });
});

export default login;