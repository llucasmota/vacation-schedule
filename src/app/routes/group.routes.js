import { Router } from 'express';
import CreateGroupServices from '../services/createGroup.services';
import authMiddleware from '../middlewares/auth';

const groups = Router();

groups.post('/', authMiddleware, async (req, res) => {
  const { management, description, activated } = req.body;

  const createGroupServices = new CreateGroupServices();
  const group = await createGroupServices.execute({
    management,
    description,
    activated,
  });

  return res.json(group);
});

export default groups;
