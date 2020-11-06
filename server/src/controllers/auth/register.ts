import _ from 'lodash';
import { Request, Response } from 'express';

import { dbAdditionalDocFields } from '../../config';
import registerValidator from '../../validators/register';
import ResponseError from '../../utils/responseError';
import asyncCatch from '../../utils/asyncCatch';
import MongooseUserRepo from '../../repository/mongoose/userRepository';

const register = asyncCatch(async (req: Request, res: Response) => {
	const userData = req.body;
	const { validationError } = registerValidator(userData);
	if (validationError) {
		throw new ResponseError(validationError.message, 400);
	}
	const { email } = userData;
	const userExists = await MongooseUserRepo.findOne({ email });
	if (userExists) {
		throw new ResponseError('there is already a user with this email', 409);
	}

	const user = await MongooseUserRepo.create(userData);
	req.session.userId = user._id;

	return res.json({ user: _.omit(user.toObject(), dbAdditionalDocFields) });
});

export default register;
