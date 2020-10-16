const bcrypt = require('bcrypt');
const _ = require('lodash');

const User = require('../models/User');
const registerValidator = require('../validators/register');
const { sensitiveData } = require('../config');
const loginValidator = require('../validators/login');

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

exports.login = async (req, res) => {
	const validationResult = loginValidator(req.body);
	if (validationResult !== true)
		return res.status(400).json({ message: validationResult });
	const { email = '', password = '' } = req.body;
	const user = await User.findOne({ email });
	if (!user)
		return res.status(404).json({ message: 'no user found with this email.' });
	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect)
		return res.status(401).json({ message: 'user password is not correct.' });
	req.session.userId = user._id;
	res.json({ user: _.omit(user.toObject(), sensitiveData) });
};
