import UserRepo from '../base/userRepo';
import UserModel, { MongooseUserDoc } from '../../models/mongooseUserModel';

const MongooseUserRepo: UserRepo<MongooseUserDoc> = {
	async create(userData) {
		const createdUser = UserModel.create(userData);
		return createdUser;
	},
	async findOne(userData) {
		const foundUser = UserModel.findOne(userData);
		return foundUser;
	},
	async findValidResetPassword(resetPassword) {
		const foundUser = UserModel.findOne({
			resetPassword,
			resetPasswordExpiration: { $gt: Date.now() },
		});
		return foundUser;
	},
	async updateOne(searchData, newData) {
		const updatedUser = await UserModel.findOneAndUpdate(searchData, newData, {
			new: true,
		});
		return updatedUser;
	},
};

export default MongooseUserRepo;
