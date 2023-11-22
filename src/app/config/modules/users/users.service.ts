import { UsersModel } from '../users.model';
import { Users } from './users.interface';

const createUserFromDb = async (user: Users) => {
  const result = await UsersModel.create(user);
  return result;
};

export const userServices = {
  createUserFromDb,
};
