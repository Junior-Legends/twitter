const bcrypt = require('bcryptjs');
const _ = require('lodash');

const User = require('../models/User');
const registerValidator = require('../validators/register');
const { dbRecordSensitiveData } = require('../config');
const loginValidator = require('../validators/login');
const ResponseError = require('../utils/responseError');
const asyncCatch = require('../utils/asyncCatch');

exports.register = asyncCatch(async (req, res) => {
	const userData = req.body;
	const validationErrors = registerValidator(userData);
	if (validationErrors.length > 0) {
		throw new ResponseError(validationErrors[0].message, 401);
	}
	const { password, email } = userData;
	const userExists = await User.findOne({ email });
	if (userExists) {
		throw new ResponseError('there is already a user with this email', 409);
	}
	const hash = await bcrypt.hash(password, 12);
	const user = await User.create({ ...userData, password: hash });
	req.session.userId = user._id;

	return res.json({ user: _.omit(user.toObject(), dbRecordSensitiveData) });
});

exports.login = asyncCatch(async (req, res) => {
	const userData = req.body;
	const validationErrors = loginValidator(userData);
	if (validationErrors.length > 0) {
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

	return res.json({ user: _.omit(user.toObject(), dbRecordSensitiveData) });
});
