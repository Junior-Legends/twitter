import bcrypt from 'bcryptjs';

interface CryptographyUtils {
	hashPassword: (pwd: string, salt: string | number) => Promise<string>;
	comparePassword: (pwd: string, hash: string) => Promise<boolean>;
}

const bcryptUtils: CryptographyUtils = {
	hashPassword: async (pwd: string, salt: string | number): Promise<string> => {
		if (!salt) {
			salt = await bcrypt.genSalt(12);
		}
		const hash = await bcrypt.hash(pwd, salt);
		return hash;
	},
	comparePassword: async (pwd: string, hash: string): Promise<boolean> => {
		const isCorrect = await bcrypt.compare(pwd, hash);
		return isCorrect;
	},
};

export default bcryptUtils;
