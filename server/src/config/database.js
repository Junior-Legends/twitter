const databaseConfig = {
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

module.exports = databaseConfig;
