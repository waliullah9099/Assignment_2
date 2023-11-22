import { Schema, model } from 'mongoose';
import { UserAddress, UserFullName, Users } from './users/users.interface';

const UserFullNameSchema = new Schema<UserFullName>({
  firstName: { type: String },
  lastName: { type: String },
});

const UserAddressSchema = new Schema<UserAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const usersSchema = new Schema<Users>({
  userId: { type: Number },
  username: { text: String },
  password: { type: String },
  fullName: UserFullNameSchema,
  age: { type: Number },
  email: { type: String },
  isActive: ['true', 'false'],
  address: UserAddressSchema,
});

const Users = model<Users>('User', usersSchema);
