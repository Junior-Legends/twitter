require('dotenv').config();

const serverConfigs = require('./server');

module.exports = {
	...serverConfigs,
};
