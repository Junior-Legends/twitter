const { IS_PRODUCTION } = require('./project');

const sessionConfig = {
	expressSession: {
		name: process.env.SESSION_NAME || 'jl.sid',
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			sameSite: 'strict',
			secure: IS_PRODUCTION,
			maxAge: Number.parseInt(process.env.COOKIE_MAX_AGE, 10),
		},
	},
};

module.exports = sessionConfig;
