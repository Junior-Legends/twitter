import { ValidationSchema } from 'fastest-validator';
import createCustomFastestValidatorWrapper from '../utils/customtValidator';
import validator from './shared/validator';

const schema: ValidationSchema = {
	password: { type: 'password', min: 6 },
	$$strict: 'remove',
};

const checker = validator.compile(schema);

const customValidator = createCustomFastestValidatorWrapper(checker);

export default customValidator;
