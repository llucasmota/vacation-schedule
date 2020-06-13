import { Router } from 'express';
import User from '../models/Users';

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: 'user not found' });
  }
  if (!(await user.compareHash(password))) {
    return res.status(400).json({ error: 'invalid password' });
  }
  return res.json({ user, token: User.generateToken(user.user_id) });
});

export default sessionRouter;
