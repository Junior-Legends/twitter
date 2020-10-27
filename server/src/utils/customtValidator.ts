import { ValidationError } from 'fastest-validator';

interface CustomValidationResults {
	validationError: ValidationError;
}
type FastestValidatorCheckerFunction = (
	value: unknown
) => true | ValidationError[];

type CustomValidator = (data: unknown) => CustomValidationResults;

const createCustomFastestValidatorWrapper = (
	checker: FastestValidatorCheckerFunction
): CustomValidator => {
	return (data: unknown): CustomValidationResults => {
		let validationError;
		const results = checker(data);

		if (Array.isArray(results)) {
			validationError = results[0];
		}
		return { validationError };
	};
};

export default createCustomFastestValidatorWrapper;
