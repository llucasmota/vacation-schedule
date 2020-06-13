import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import Vacation from '../models/Vacation';

const vacationRoutes = Router();

vacationRoutes.post('/', authMiddleware, async (req, res) => {
  const data = req.body;
  const vacation = await Vacation.create({
    ...data,
    user_id: req.userId,
  });

  return res.json({ vacation });
});

export default vacationRoutes;
