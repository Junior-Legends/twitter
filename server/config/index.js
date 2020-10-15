require('dotenv').config();

const IN_PRODUCTION = process.env.NODE_ENV === 'production';

const serverConfigs = require('./server');
const sensitiveData = require('./sensitiveData');
const dbConfigs = require('./db');
const sessionConfigs = require('./sessionConfig');

module.exports = {
	...serverConfigs,
	...sensitiveData,
	...dbConfigs,
	IN_PRODUCTION,
	...sessionConfigs,
};
