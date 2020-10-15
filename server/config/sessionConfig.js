const { IN_PRODUCTION } = require('./');

const SESSION_SECRET = process.env.SESSION_SECRET;
const COOKIE_MAX_AGE = Number(process.env.COOKIE_MAX_AGE);

exports.sessionConfig = {
	secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	name: 'jl.sid',
	cookie: {
		httpOnly: true,
		sameSite: 'strict',
		secure: IN_PRODUCTION,
		maxAge: COOKIE_MAX_AGE,
	},
};
