import { Account } from '../utils/mailing';

interface MailingConfig {
	account: Account;
}

const mailingConfig: MailingConfig = {
	account: {
		username: process.env.MAIL_USERNAME,
		password: process.env.MAIL_PASSWORD,
	},
};

export default mailingConfig;
