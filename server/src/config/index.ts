import dotenv from 'dotenv';
dotenv.config();

import serverConfig from './server';
import dbAdditionalDocFields from './dbAdditionalDocFields';
import databaseConfig from './database';
import sessionConfig from './session';
import projectConfig from './project';
import mailingConfig from './mailing';

export {
	serverConfig,
	dbAdditionalDocFields,
	databaseConfig,
	projectConfig,
	sessionConfig,
	mailingConfig,
};
