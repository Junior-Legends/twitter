const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		username: {
			type: String,
		},
		email: {
			type: String,
		},
		password: {
			type: String,
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
