import mongoose, { Model, Document } from 'mongoose';
import MongooseUserSchemaPlugin from '../plugins/mongooseUserSchemaPlugin';

export interface MongooseUserDoc extends Document {
	name?: string;
	username?: string;
	email?: string;
	password?: string;
	role?: string;
}

const UserSchema = new mongoose.Schema(
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

UserSchema.plugin(MongooseUserSchemaPlugin);

const User: Model<MongooseUserDoc> = mongoose.model('User', UserSchema);

export default User;
