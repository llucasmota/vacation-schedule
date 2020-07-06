import Group from '../models/Group';
import AppError from '../Errors/AppError';

export default class CreateGroupServices {
  async execute({ management, description, activated }) {
    const checkExistGroup = await Group.findOne({ management });

    if (checkExistGroup) {
      throw new AppError('Gerênca já existente', 400);
    }

    const group = await Group.create({
      management,
      description,
      activated,
    });
    return group;
  }
}
