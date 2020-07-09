import { Router } from 'express';
import CreateSessionService from '../services/createSession.services';

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const createSessionService = new CreateSessionService();
  const session = await createSessionService.execute({ email, password });
  return res.json(session);
});

export default sessionRouter;
