import User from '../models/Users';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'user not found' });
    }
    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: 'invalid password' });
    }
    return res.json({ user, token: User.generateToken(user.user_id) });
  }
}

export default new SessionController();
