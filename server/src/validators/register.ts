import Validator, { ValidationSchema } from 'fastest-validator';
import createCustomFastestValidatorWrapper from '../utils/customtValidator';

const v: Validator = new Validator();

const schema: ValidationSchema = {
	username: { type: 'string', min: 3, max: 300, optional: true },
	name: { type: 'string', min: 3, max: 300, optional: true },
	email: { type: 'email', min: 4, max: 300 },
	password: { type: 'string', min: 6, max: 300 },
	confirmPassword: { type: 'equal', field: 'password', strict: true },
	$$strict: 'remove',
};

const checker = v.compile(schema);
const validator = createCustomFastestValidatorWrapper(checker);

export default validator;
