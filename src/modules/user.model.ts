import { Schema, model } from 'mongoose';
import { UserAddress, UserFullName, User } from './user/user.interface';

const UserFullNameSchema = new Schema<UserFullName>({
  firstName: { type: String },
  lastName: { type: String },
});

const UserAddressSchema = new Schema<UserAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const usersSchema = new Schema<User>({
  userId: { type: Number, unique: true },
  username: { text: String },
  password: { type: String },
  fullName: UserFullNameSchema,
  age: { type: Number },
  email: { type: String, unique: true },
  isActive: ['true', 'false'],
  hobbies: [String],
  address: UserAddressSchema,
});

export const UserModel = model<User>('User', usersSchema);
