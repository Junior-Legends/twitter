import { MongooseUserDoc } from '../models/mongooseUserModel';

type DbAdditionalDocFields = (keyof MongooseUserDoc)[];

const dbAdditionalDocFields: DbAdditionalDocFields = ['__v', 'password'];
export default dbAdditionalDocFields;
