interface ServerConfig {
	domain: string;
	port: number;
}

const serverConfig: ServerConfig = {
	domain: process.env.DOMAIN || 'localhost',
	port: Number.parseInt(process.env.PORT, 10) || 5000,
};

export default serverConfig;
