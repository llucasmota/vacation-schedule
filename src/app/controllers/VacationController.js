import Vacation from '../models/Vacation';

class VacationController {
  async store(req, res) {
    const data = req.body;
    const vacation = await Vacation.create({
      ...data,
      user_id: req.userId,
    });

    return res.json({ vacation });
  }
}

export default new VacationController();
