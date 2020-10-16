require('dotenv').config();

const serverConfig = require('./server');
const sensitiveData = require('./sensitiveData');
const databaseConfig = require('./database');
const sessionConfig = require('./session');
const projectConfig = require('./project');

module.exports = {
	serverConfig,
	sensitiveData,
	databaseConfig,
	projectConfig,
	sessionConfig,
};
