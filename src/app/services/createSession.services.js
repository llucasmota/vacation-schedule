import User from '../models/Users';
import AppError from '../Errors/AppError';

export default class CreateSessionService {
  async execute({ email, password }) {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      throw new AppError('user not found', 401);
    }
    if (!(await user.compareHash(password))) {
      throw new AppError('invalid password', 401);
    }
    const token = User.generateToken(user.user_id);
    const jwtCreatedResponse = {
      user,
      token,
    };
    return jwtCreatedResponse;
  }
}
