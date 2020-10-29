import mongoose, { Model, Document } from 'mongoose';
import MongooseUserSchemaPlugin from '../plugins/mongooseUserSchemaPlugin';
import { User } from './user';

export interface MongooseUserDoc extends Document, User {}

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
			default: 'user',
			enum: ['user', 'superuser'],
		},
	},
	{ timestamps: true }
);

UserSchema.plugin(MongooseUserSchemaPlugin);

const UserModel: Model<MongooseUserDoc> = mongoose.model('User', UserSchema);

export default UserModel;
