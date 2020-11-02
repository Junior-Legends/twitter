import { ConnectionOptions } from 'mongoose';

interface DatabaseConfig {
	mongoose: {
		dbUri: string | undefined;
		mongooseConnectOptions: ConnectionOptions;
	};
}

const databaseConfig: DatabaseConfig = {
	mongoose: {
		dbUri: process.env.DB_URI,
		mongooseConnectOptions: {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
		},
	},
};

export default databaseConfig;
