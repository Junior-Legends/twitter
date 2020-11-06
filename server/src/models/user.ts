export interface User {
	name?: string;
	resetPassword?: string;
	resetPasswordExpiration?: number;
	username: string;
	email: string;
	password: string;
	role: string;
}
