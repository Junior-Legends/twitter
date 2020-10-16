const mongoose = require('mongoose');
const http = require('http');

const { databaseConfig, serverConfig } = require('./config');
const app = require('./app');

const mongooseConfig = databaseConfig.mongoose;
const { port, domain } = serverConfig;

mongoose
	.connect(
		`mongodb://${serverConfig.domain}/${mongooseConfig.dbName}`,
		mongooseConfig.moongooseConnectOptions
	)
	.then(() => {
		console.log(`mongoose connected successfully ✅`);
	})
	.catch((error) => {
		console.log('error occurred while connecting to mongodb server ❌');
		console.warn(error);
	});

const server = http.createServer(app);

server.listen(port, domain, () => {
	console.log(`listening on port ${port} 👂`);
});

process.on('unhandledRejection', console.error);
