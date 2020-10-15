const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: 'user',
			enum: ['user', 'superuser'],
		},
	},
	{ timestamps: true }
);

const model = mongoose.model('User', schema);

module.exports = model;
