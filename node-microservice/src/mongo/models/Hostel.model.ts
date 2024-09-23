import mongoose from "mongoose";

const HostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  user_ratings_total: {
    type: Number,
    required: true,
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
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  icon: {
    url: {
      type: String,
      required: true,
    },
    background_color: {
      type: String,
      required: true,
    },
  },
  photos: [
    {
      photo_reference: {
        type: String,
        required: true,
      },
      dimensions: {
        height: {
          type: Number,
          required: true,
        },
        width: {
          type: Number,
          required: true,
        },
      },
      attribution: {
        type: String,
        required: true,
      },
    },
  ],
  hostel_members: [
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      program: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      college: {
        type: String,
        required: true,
      },
    },
  ],
});

const Hostel = mongoose.model('Hostel', HostelSchema);
module.exports = Hostel;
