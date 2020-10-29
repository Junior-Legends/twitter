import UserModel, { MongooseUserDoc } from '../models/mongooseUserModel';

interface Store<T> {
	saveUser: (userData: T) => Promise<T>;
	findOneUser: (userData: Partial<T>) => Promise<T>;
}

export const MongooseStore: Store<MongooseUserDoc> = {
	saveUser: async (userData) => {
		const createdUser = UserModel.create(userData);
		return createdUser;
	},
	findOneUser: async (userData) => {
		const foundUser = UserModel.findOne(userData);
		return foundUser;
	},
};
