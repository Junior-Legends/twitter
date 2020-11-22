import lodashOmit from 'lodash/omit';
import { Request, Response } from 'express';

import { dbAdditionalDocFields } from '../../config';
import resetPasswordValidator from '../../validators/resetPassword';
import ResponseError from '../../utils/responseError';
import asyncCatch from '../../utils/asyncCatch';
import UserRepository from '../../repository/userRepository';

const restPassword = asyncCatch(async (req: Request, res: Response) => {
	const resetToken = req.params.token;
	const user = await UserRepository.findValidResetPassword(resetToken);
	if (!user) {
		throw new ResponseError('reset password not found', 404);
	}
	const newPassword = req.body.password;
	const { validationError } = resetPasswordValidator({
		password: newPassword,
	});
	if (validationError) {
		throw new ResponseError(validationError.message, 400);
	}
	user.password = newPassword;
	user.resetPassword = null;
	user.resetPasswordExpiration = null;
	const newUser = await user.save();

	return res.json({
		user: lodashOmit(newUser.toObject(), dbAdditionalDocFields),
	});
});

export default restPassword;
