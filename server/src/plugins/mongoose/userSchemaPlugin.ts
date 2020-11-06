/* eslint-disable @typescript-eslint/no-this-alias */
import bcryptUtils from '../../utils/cryptography';

import { Schema } from 'mongoose';
import { MongooseUserDoc } from '../../models/mongooseUserModel';

function MongooseUserSchemaPlugin(schema: Schema): void {
	schema.pre<MongooseUserDoc>('save', async function (next): Promise<void> {
		try {
			const user = this;
			console.log(user.password);
			if (!user.isModified('password')) return next();
			const hash = await bcryptUtils.hashPassword(user.password, 12);
			console.log(hash);
			user.password = hash;
			return next();
		} catch (err) {
			return next(err);
		}
	});
}

export default MongooseUserSchemaPlugin;
