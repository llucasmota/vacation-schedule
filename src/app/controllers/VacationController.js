import Vacation from '../models/Vacation'
import User from '../models/Users'

class VacationController{
  async store(req, res){
    const user = await User.findOne({user_id: req.userId})
    return res.json({user})
  }
}

export default new VacationController()