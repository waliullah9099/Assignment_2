import { Model } from 'mongoose';

export type TUserFullName = {
  firstName: string;
  lastName: string;
};

export type TUserAddress = {
  street: string;
  city: string;
  country: string;
};

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TUserFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TUserAddress;
  isDeleted: boolean;
};

export type userMethods = {
  isExixts(id: string): Promise<TUser | null>;
};

export type UserModel = Model<TUser, Record<string, never>, userMethods>;
