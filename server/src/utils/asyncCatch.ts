import { Request, Response, NextFunction, RequestHandler } from 'express';

export default (fn: RequestHandler) => {
	return (req: Request, res: Response, next: NextFunction) =>
		fn(req, res, next).catch(next);
};
