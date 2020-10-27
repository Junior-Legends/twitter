/* eslint-disable @typescript-eslint/no-this-alias */
import bcryptUtils from '../utils/cryptography';

import { Schema } from 'mongoose';
import { MongooseUserDoc } from '../models/User';

function MongooseUserSchemaPlugin(schema: Schema): void {
	schema.pre<MongooseUserDoc>(/^(save|update)/i, async function (
		next
	): Promise<void> {
		try {
			const hash = await bcryptUtils.hashPassword(this.password, 12);
			this.password = hash;
			return next();
		} catch (err) {
			return next(err);
		}
	});
}

export default MongooseUserSchemaPlugin;
