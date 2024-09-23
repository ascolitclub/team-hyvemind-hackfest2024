import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  user_hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel',
    required: false,
  },

  user_status: {
    type: String,
    enum: ['pending', 'not_apply', 'approved'],
    default: 'not_apply',
  },
});

const User = mongoose.model('User', userSchema);
export default User;
