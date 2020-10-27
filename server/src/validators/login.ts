import Validator, { ValidationSchema } from 'fastest-validator';
import createCustomFastestValidatorWrapper from '../utils/customtValidator';

const v: Validator = new Validator();

const schema: ValidationSchema = {
	username: { type: 'string', min: 3, max: 300, optional: true },
	email: { type: 'email' },
	password: { type: 'string' },
	$$strict: 'remove',
};

const checker = v.compile(schema);
const validator = createCustomFastestValidatorWrapper(checker);

export default validator;
