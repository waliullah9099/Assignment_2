import { Request, Response } from 'express';
import { userServices } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await userServices.createUserFromDb(user);
    res.status(200).json({
      success: true,
      message: 'user create successfully',
      userData: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'user create successfully',
      error: err,
    });
  }
};

export const userController = {
  createUser,
};
