import { ConnectionOptions } from 'mongoose';

interface DatabaseConfig {
	mongoose: {
		dbName: string | undefined;
		moongooseConnectOptions: ConnectionOptions;
	};
}

const databaseConfig: DatabaseConfig = {
	mongoose: {
		dbName: process.env.DB_NAME,
		moongooseConnectOptions: {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
		},
	},
};

export default databaseConfig;
