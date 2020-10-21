require('dotenv').config();

const serverConfig = require('./server');
const dbRecordSensitiveData = require('./dbRecordSensitiveData');
const databaseConfig = require('./database');
const sessionConfig = require('./session');
const projectConfig = require('./project');

module.exports = {
	serverConfig,
	dbRecordSensitiveData,
	databaseConfig,
	projectConfig,
	sessionConfig,
};
