import mongoose from 'mongoose';

const Vacation = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  vacation_id: {
    type: String,
    unique: true,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  year_reference: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Vacation', Vacation);
