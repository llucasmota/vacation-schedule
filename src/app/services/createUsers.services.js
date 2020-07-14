import User from '../models/Users';
import AppError from '../Errors/AppError';

export default class CreateUsersServices {
  async execute({ name, cpf, email, password, dateContractStart }) {
    // verifica se o email informado já existe na base
    if (await User.findOne({ email })) {
      throw new AppError('Email ou CPF já cadastrados', 400);
    }
    // verifica se o cpf informado já existe na base
    if (await User.findOne({ cpf })) {
      throw new AppError('Email ou CPF já cadastrados', 400);
    }
    const user = await User.create({
      name,
      cpf,
      email,
      password,
      dateContractStart,
    });

    delete user.user_id;
    delete user.id;
    delete user.createdAt;
    return {
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      password: user.passowrd,
      dateContractStart: user.dateContractStart,
    };
  }
}
