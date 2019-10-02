import User from '../models/Users';
import uuid from 'uuid/v4';

class UserController {
  async store(req, res) {
    const { email, cpf } = req.body;
    // verifica se o email informado já existe na base
    if (await User.findOne({ email })) {
      return res
        .status(400)
        .json({ error: { message: 'Este e-mail já existe' } });
    }
    // verifica se o cpf informado já existe na base
    if (await User.findOne({ cpf })) {
      return res.status(400).json({ error: { message: 'Este cpf já existe' } });
    }
    const id = await uuid();
    const user = await User.create({ ...req.body, user_id: id });
    return res.json(user);
  }

  async index(req, res) {
    return res.json({ message: 'hello' });
  }
}

export default new UserController();
