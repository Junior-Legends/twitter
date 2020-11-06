import { ValidationSchema } from 'fastest-validator';
import createCustomFastestValidatorWrapper from '../utils/customtValidator';
import validator from './shared/validator';

const schema: ValidationSchema = {
	username: { type: 'username' },
	name: { type: 'string', min: 3, max: 300, optional: true },
	email: { type: 'email' },
	password: { type: 'string', min: 6 },
	confirmPassword: { type: 'equal', field: 'password', strict: true },
	$$strict: 'remove',
};

const checker = validator.compile(schema);

const customValidator = createCustomFastestValidatorWrapper(checker);

export default customValidator;
