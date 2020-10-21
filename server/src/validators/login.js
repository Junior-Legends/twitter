const Validator = require('fastest-validator');

const v = new Validator();

const schema = {
	username: { type: 'string', min: 3, max: 300, optional: true },
	email: { type: 'email' },
	password: { type: 'string' },
	$$strict: 'remove',
};

const checker = v.compile(schema);

module.exports = checker;
