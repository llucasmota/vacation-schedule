import { Router } from 'express';
import User from '../models/Users';
import CreateUserService from '../services/createUsers.services';

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  const { name, email, cpf, password, dateContractStart } = req.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({
    name,
    email,
    cpf,
    password,
    dateContractStart,
  });

  return res.json(user);
});

userRouter.get('/', async (req, res) => {
  const user = await User.find();
  return res.json(user);
});

export default userRouter;
