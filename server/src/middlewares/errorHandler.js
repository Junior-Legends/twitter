/* eslint-disable no-unused-vars */

function errorHandler(error, _req, res, _next) {
	return res.status(error.status || 500).send({
		error: {
			message: error.message || 'Internal Server Error',
		},
	});
}

module.exports = errorHandler;
