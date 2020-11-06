import nodemailer, { Transporter as NodemailerTransporter } from 'nodemailer';

export interface Account {
	username: string;
	password: string;
}

export interface Email {
	from: string;
	to: string;
	subject?: string;
	text: string;
	htmlText?: string;
}

export interface EmailResponse {
	mailId: string;
}

export interface MailingService<Transporter> {
	createTransporter(account: Account): Promise<Transporter>;
}

export const nodemailerUtils: MailingService<NodemailerTransporter> = {
	async createTransporter(account: Account) {
		console.log(account);
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: account.username,
				pass: account.password,
			},
		});

		return transporter;
	},
};

export interface Mailer<Transporter> {
	readonly transporter: Transporter;
	sendMail(emailData: Email): Promise<EmailResponse>;
}

export class NodemailerMailer implements Mailer<NodemailerTransporter> {
	readonly transporter;
	constructor(transporter: NodemailerTransporter) {
		this.transporter = transporter;
	}
	public async sendMail(emailData: Email): Promise<EmailResponse> {
		const { messageId } = await this.transporter.sendMail(emailData);
		return { mailId: messageId };
	}
}
