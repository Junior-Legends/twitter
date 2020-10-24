import { SessionOptions as expressSessionOptions } from 'express-session';

import projectConfig from './project';

interface SessionConfig {
	expressSession: expressSessionOptions;
}

const sessionConfig: SessionConfig = {
	expressSession: {
		name: process.env.SESSION_NAME || 'jl.sid',
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			sameSite: 'strict',
			secure: projectConfig.isProduction,
			maxAge: Number.parseInt(process.env.COOKIE_MAX_AGE, 10),
		},
	},
};

export default sessionConfig;
