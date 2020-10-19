const Validator = require('fastest-validator');

const v = new Validator();

const schema = {
	username: { type: 'string', min: 3, max: 300, optional: true },
	name: { type: 'string', min: 3, max: 300, optional: true },
	email: { type: 'email', min: 4, max: 300 },
	password: { type: 'string', min: 6, max: 300 },
	confirmPassword: { type: 'equal', field: 'password', strict: true },
	$$strict: 'remove',
};

const checker = v.compile(schema);

module.exports = checker;
