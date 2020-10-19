const bcrypt = require('bcryptjs');
const _ = require('lodash');

const User = require('../models/User');
const registerValidator = require('../validators/register');
const { dbRecordSensitiveData } = require('../config');
const loginValidator = require('../validators/login');
const ResponseError = require('../utils/responseError');

console.log(ResponseError);
exports.register = async (req, res, next) => {
	const userData = req.body;
	const validationErrors = registerValidator(userData);
	if (validationErrors.length > 0) {
		const error = new ResponseError(validationErrors[0].message, 401);
		return next(error);
	}
	console.log(userData);
	const { password, email } = userData;
	const userExists = await User.findOne({ email });
	if (userExists) {
		const error = new ResponseError(
			'there is already a user with this email',
			409
		);
		return next(error);
	}
	const hash = await bcrypt.hash(password, 12);
	const user = await User.create({ ...userData, password: hash });
	req.session.userId = user._id;

	return res
		.status(201)
		.json({ user: _.omit(user.toObject(), dbRecordSensitiveData) });
};

exports.login = async (req, res, next) => {
	const userData = req.body;
	const validationErrors = loginValidator(userData);
	if (validationErrors.length > 0) {
		const error = new ResponseError(validationErrors[0].message, 401);
		return next(error);
	}
	console.log(userData);
	const { email, password } = userData;
	const user = await User.findOne({ email });
	if (!user) {
		const error = new ResponseError('no user found with this email.', 404);
		return next(error);
	}
	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) {
		const error = new ResponseError('user password is not correct.', 401);
		return next(error);
	}
	req.session.userId = user._id;

	return res.json({ user: _.omit(user.toObject(), dbRecordSensitiveData) });
};
