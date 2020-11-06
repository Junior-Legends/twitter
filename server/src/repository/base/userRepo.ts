interface UserRepository<T> {
	create(userData: T): Promise<T>;
	findOne(userData: Partial<T>): Promise<T>;
	findValidResetPassword(resetPassword: string): Promise<T>;
	updateOne(searchData: Partial<T>, newsData: Partial<T>): Promise<T>;
}

export default UserRepository;
