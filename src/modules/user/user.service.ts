import { UserModel } from '../user.model';
import { User } from './user.interface';

const createUserFromDb = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getUsersFromDb = async () => {
  const result = await UserModel.find();

  // const result = await UserModel.aggregate([
  //   {$project: {username: 1, fullName: 1, age: 1, email: 1, address: 1}}
  // ])
  return result;
};

const getSingleUserFromDb = async (id: string) => {
  const result = await UserModel.findOne({ userId: id });

  // const result = await UserModel.aggregate([
  //   { $match: { userId: id } },
  //   { $project: { username: 1, fullName: 1, age: 1, email: 1, address: 1 } },
  // ]);

  return result;
};

export const userServices = {
  createUserFromDb,
  getUsersFromDb,
  getSingleUserFromDb,
};
