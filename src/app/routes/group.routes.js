import { Router } from 'express';
import Group from '../models/Group';
import authMiddleware from '../middlewares/auth';

const groups = Router();

groups.post('/', authMiddleware, async (req, res) => {
  const { management, description, activated } = req.body;

  const group = await Group.create({
    management,
    description,
    activated,
  });

  return res.json(group);
});

export default groups;
