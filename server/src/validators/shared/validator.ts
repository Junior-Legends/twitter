import Validator from 'fastest-validator';

const validator: Validator = new Validator();

validator.alias('username', { type: 'string', min: 3, max: 300 });
validator.alias('password', { type: 'string', max: 300 });

export default validator;
