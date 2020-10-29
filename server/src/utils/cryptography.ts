import bcrypt from 'bcryptjs';

interface CryptographyService {
	hashPassword: (pwd: string, salt: string | number) => Promise<string>;
	comparePassword: (pwd: string, hash: string) => Promise<boolean>;
}

const bcryptUtils: CryptographyService = {
	hashPassword: async (pwd, salt) => {
		if (!salt) {
			salt = await bcrypt.genSalt(12);
		}
		const hash = await bcrypt.hash(pwd, salt);
		return hash;
	},
	comparePassword: async (pwd, hash) => {
		const isCorrect = await bcrypt.compare(pwd, hash);
		return isCorrect;
	},
};

export default bcryptUtils;
