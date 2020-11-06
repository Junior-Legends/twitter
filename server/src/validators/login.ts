import { ValidationSchema } from 'fastest-validator';
import createCustomFastestValidatorWrapper from '../utils/customtValidator';
import validator from './shared/validator';

const schema: ValidationSchema = {
	username: { type: 'username' },
	email: { type: 'email' },
	password: { type: 'password' },
	$$strict: 'remove',
};

const checker = validator.compile(schema);
const customValidator = createCustomFastestValidatorWrapper(checker);

export default customValidator;
