import uuid from 'uuid/v4';
import Group from '../models/Group';

class GroupController {
  async store(req, res) {
    const { management, description, activated } = req.body;
    const groupId = await uuid();
    const group = await Group.create({
      group_id: groupId,
      management,
      description,
      activated,
    });

    return res.json(group);
  }
}
export default new GroupController();
