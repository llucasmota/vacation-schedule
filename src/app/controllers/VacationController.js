import Vacation from '../models/Vacation';
import uuid from 'uuid/v4';

class VacationController {
  async store(req, res) {
    const data = req.body;
    const idVacation = await uuid();
    const vacation = await Vacation.create({
      ...data,
      user_id: req.userId,
      vacation_id: idVacation,
    });

    return res.json({ vacation });
  }
}

export default new VacationController();
