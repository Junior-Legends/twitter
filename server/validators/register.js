const Validator = require('fastest-validator');

const v = new Validator();

const schema = {
	email: { type: 'string', min: 4, max: 300 },
	password: { type: 'string', min: 6, max: 300 },
	confirmPassword: { type: 'equal', field: 'password', strict: true },
	$$strict: true,
};

const checker = v.compile(schema);

module.exports = checker;
