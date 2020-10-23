import mongoose, { Model, Document } from 'mongoose';

export interface MongooseUserDoc extends Document {
	name?: string;
	username?: string;
	email?: string;
	password?: string;
	role?: string;
}

const Schema = new mongoose.Schema(
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

const User: Model<MongooseUserDoc> = mongoose.model('User', Schema);

export default User;
