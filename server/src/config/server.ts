interface ServerConfig {
	domain: string;
	port: number;
	allowedOrigins: string[];
}

const serverConfig: ServerConfig = {
	domain: process.env.DOMAIN || 'localhost',
	port: Number.parseInt(process.env.PORT, 10) || 5000,
	allowedOrigins: JSON.parse(
		process.env.ALLOWED_ORIGINS || '["http://localhost:3000"]'
	),
};

export default serverConfig;
