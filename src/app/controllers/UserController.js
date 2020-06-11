import User from '../models/Users';

class UserController {
  async store(req, res) {
    const { email, cpf } = req.body;
    // verifica se o email informado já existe na base
    if (await User.findOne({ email })) {
      return res
        .status(400)
        .json({ error: { message: 'Email ou CPF já cadastrados' } });
    }
    // verifica se o cpf informado já existe na base
    if (await User.findOne({ cpf })) {
      return res
        .status(400)
        .json({ error: { message: 'Email ou CPF já cadastrados' } });
    }

    const user = await User.create({ ...req.body });
    return res.json(user);
  }

  async index(req, res) {
    const user = await User.find();
    return res.json(user);
  }
}

export default new UserController();
