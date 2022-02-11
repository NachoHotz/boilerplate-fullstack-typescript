import User from '../db/schemas/User.schema';
import users from '../../users.json';

export const getUsers = async (): Promise<any[] | undefined> => {
  try {
    return await User.find();
  } catch (e) {
    console.error(e);
  }
};

export const createUser = async (): Promise<void> => {
  try {
    const usersParsed = Array.from(users);

    usersParsed.map(async (user) => await User.create(user));
  } catch (e) {
    console.error(e);
  }
};

export const getUniqueUser = async (id: number): Promise<any> => {
  try {
    return await User.findOne({ id });
  } catch (e: any) {
    console.error(e);
  }
};
