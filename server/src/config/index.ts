import dotenv from 'dotenv';
dotenv.config();

import serverConfig from './server';
import dbAdditionalDocFields from './dbAdditionalDocFields';
import databaseConfig from './database';
import sessionConfig from './session';
import projectConfig from './project';

export {
	serverConfig,
	dbAdditionalDocFields,
	databaseConfig,
	projectConfig,
	sessionConfig,
};
