/* eslint-disable  @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import ResponseError from '../utils/responseError';

function errorHandler(
	error: ResponseError,
	_req: Request,
	res: Response,
	_next: NextFunction
): Response {
	return res.status(error.status || 500).send({
		error: {
			message: error.message || 'Internal Server Error',
		},
	});
}

export default errorHandler;
