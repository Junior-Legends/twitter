import { MongooseUserDoc } from '../models/User';

type DbAdditionalDocFields = (keyof MongooseUserDoc)[];

const dbAdditionalDocFields: DbAdditionalDocFields = ['__v', 'password'];
export default dbAdditionalDocFields;
