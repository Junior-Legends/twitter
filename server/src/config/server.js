const serverConfig = {
	domain: process.env.DOMAIN || 'localhost',
	port: Number.parseInt(process.env.PORT, 10) || 5000,
};

module.exports = serverConfig;
