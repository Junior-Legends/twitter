const bcrypt = require('bcrypt');
const _ = require('lodash');

const User = require('../models/User');
const registerValidator = require('../validators/register');
const { sensitiveData } = require('../config');

exports.register = async (req, res) => {
	const validationResult = registerValidator(req.body);
	if (validationResult !== true)
		return res.status(400).json({ message: validationResult });
	let { email, password } = req.body;
	password = await bcrypt.hash(password, 12);
	const user = await User.create({ email, password });
	res.status(201).json({ user: _.omit(user.toObject(), sensitiveData) });
	req.session.userId = user._id;
};
