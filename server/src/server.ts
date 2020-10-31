import mongoose from 'mongoose';
import http from 'http';

import { databaseConfig, serverConfig } from './config';
import app from './app';

const mongooseConfig = databaseConfig.mongoose;
const { port, domain } = serverConfig;

mongoose
	.connect(mongooseConfig.dbUri, mongooseConfig.mongooseConnectOptions)
	.then(() => {
		console.log('mongoose connected successfully ✅');
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
