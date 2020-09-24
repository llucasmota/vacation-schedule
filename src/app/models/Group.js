import mongoose from 'mongoose';
import uuid from 'uuid/v4';

const Group = new mongoose.Schema({
  group_id: {
    type: String,
    default: uuid(),
    required: true,
    unique: true,
  },
  /**
   * Sigla da gerencia
   */
  management: {
    type: String,
    required: true,
    unique: true,
  },
  subGroup: [
    {
      subGroup_id: {
        type: String,
        default: uuid(),
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  /**
   * ativado ou não
   */
  activated: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('Group', Group);
