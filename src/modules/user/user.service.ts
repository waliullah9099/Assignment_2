import { User } from '../user.model';
import { TUser } from './user.interface';

const createUserFromDb = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const getUsersFromDb = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDb = async (id: string) => {
  const result = await User.findOne({ userId: id });

  // const result = await User.aggregate([{ $match: { userId: id } }]);

  return result;
};

const deletSingleUserFromDb = async (id: string) => {
  const result = await User.updateOne({ userId: id }, { isDeleted: true });
  return result;
};

export const userServices = {
  createUserFromDb,
  getUsersFromDb,
  getSingleUserFromDb,
  deletSingleUserFromDb,
};
