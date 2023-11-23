import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createUser);

router.get('/', userController.getUsers);

router.get('/:id', userController.getSingleUser);

router.delete('/:id', userController.deleteSingleUser);

export const userRouter = router;
