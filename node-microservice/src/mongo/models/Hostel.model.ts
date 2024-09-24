import mongoose from 'mongoose';

const HostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  user_ratings_total: {
    type: Number,
    default: 0,
  },

  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  place_id: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },

  photos: [
    {
      photo_reference: {
        type: String,
        required: true,
      },
    },
  ],
  hostel_members: [
    {
      name: {
        type: String,
        required: false,
      },
      age: {
        type: Number,
        required: false,
      },
      program: {
        type: String,
        required: false,
      },
      location: {
        type: String,
        required: false,
      },
      college: {
        type: String,
        required: false,
      },
    },
  ],
});

const Hostel = mongoose.model('Hostel', HostelSchema);
export default Hostel;
