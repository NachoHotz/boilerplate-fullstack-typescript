import { Request, Response } from 'express';
import * as userService from '../services/User.service';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const allUsers = await userService.getUsers();

    if (!allUsers || allUsers.length === 0) {
      return res.status(404).send({
        status: 'failure',
        code: 404,
        message: 'No users found',
      });
    }

    res.send({
      status: 'success',
      code: 200,
      message: 'users found',
      allUsers,
    });
  } catch (e: any) {
    return new Error(e);
  }
};

export const createUser = async (_req: Request, res: Response) => {
  try {
    await userService.createUser();

    return res.send({
      status: 'success',
      code: 201,
      message: 'users created',
    });
  } catch (e: any) {
    return new Error(e);
  }
};

export const getUniqueUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const uniqueUser = await userService.getUniqueUser(id);

    if (!uniqueUser) {
      return res.status(4004).send({
        status: 'failure',
        code: 404,
        message: `user not found with id ${id}`,
      });
    }

    res.send({
      status: 'success',
      code: 200,
      message: 'user found',
      uniqueUser,
    });
  } catch (e: any) {
    return new Error(e);
  }
};
