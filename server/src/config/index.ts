import dotenv from 'dotenv';

import serverConfig from './server';
import dbAdditionalDocFields from './dbAdditionalDocFields';
import databaseConfig from './database';
import sessionConfig from './session';
import projectConfig from './project';

dotenv.config();

export {
	serverConfig,
	dbAdditionalDocFields,
	databaseConfig,
	projectConfig,
	sessionConfig,
};
