import _ from 'lodash';
import { Request, Response } from 'express';
import { v4 as createUuid } from 'uuid';

import asyncCatch from '../../utils/asyncCatch';
import MongooseUserRepo from '../../repository/mongoose/userRepository';
import { NodemailerMailer, nodemailerUtils } from '../../utils/mailing';
import TimeCalculator from '../../utils/timeUnitsConverter';
import {
	dbAdditionalDocFields,
	serverConfig,
	mailingConfig,
} from '../../config';
import ResponseError from '../../utils/responseError';

const forgotPassword = asyncCatch(async (req: Request, res: Response) => {
	const { email } = req.body;
	const user = await MongooseUserRepo.findOne({ email });
	if (!user) {
		throw new ResponseError('no user with the given email exists', 404);
	}
	const { account } = mailingConfig;
	const transporter = await nodemailerUtils.createTransporter(account);
	const mailer = new NodemailerMailer(transporter);

	const uuid = createUuid();
	const baseUrl = `http://${serverConfig.domain}:${serverConfig.port}${req.baseUrl}`;
	const resetLink = `${baseUrl}/reset-password/${uuid}`;

	await mailer.sendMail({
		from: '"the junior developers 😉"',
		to: 'amirabbasgamer2@gmail.com',
		subject: 'forgot password ✔',
		text:
			`Hi ${user.name || user.username}` +
			`you've requested forgot password here's the link` +
			`${resetLink}`,
	});

	const twentyMinInMiliSec = TimeCalculator.minToMilisec(1);
	const nextTwentyMinInMiliSec = Date.now() + twentyMinInMiliSec;

	const newUser = await MongooseUserRepo.updateOne(
		{ email },
		{ resetPassword: uuid, resetPasswordExpiration: nextTwentyMinInMiliSec }
	);

	return res.json({
		uuid,
		user: _.omit(newUser.toObject(), dbAdditionalDocFields),
	});
});

export default forgotPassword;
