import Group from '../models/Group';

class GroupController {
  async store(req, res) {
    const { management, description, activated } = req.body;

    const group = await Group.create({
      management,
      description,
      activated,
    });

    return res.json(group);
  }
}
export default new GroupController();
