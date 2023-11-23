import { Schema, model } from 'mongoose';
import bycript from 'bcrypt';
import {
  TUserAddress,
  TUserFullName,
  TUser,
  UserModel,
  userMethods,
} from './user/user.interface';
import config from '../app/config';

const UserFullNameSchema = new Schema<TUserFullName>({
  firstName: { type: String },
  lastName: { type: String },
});

const UserAddressSchema = new Schema<TUserAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const usersSchema = new Schema<TUser, UserModel, userMethods>({
  userId: {
    type: Number,
    unique: true,
    required: [true, 'user id is required'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'user name is required'],
  },
  password: { type: String },
  fullName: UserFullNameSchema,
  age: { type: Number },
  email: { type: String, unique: true, required: [true, 'email is required'] },
  isActive: { type: Boolean },
  hobbies: { type: [String] },
  address: UserAddressSchema,
  isDeleted: { type: Boolean, default: false },
});

// pre save middleware
usersSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bycript.hash(
    user.password,
    Number(config.bycript_solt_rounds),
  );
  next();
});

// post save middleware
usersSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// pre find hook
usersSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
usersSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
usersSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

usersSchema.methods.isExixts = async function (id: string) {
  const existingUser = await User.findOne({ userId: id });
  return existingUser;
};

export const User = model<TUser, UserModel>('User', usersSchema);
