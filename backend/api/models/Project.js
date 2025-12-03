const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    video: {
      type: String, // optional video URL
    },
    land_size: {
      type: Number,
    },
    house_size: {
      type: Number,
    },
    build_duration: {
      type: String,
    },
    floors: {
      type: Number,
    },
    date: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;