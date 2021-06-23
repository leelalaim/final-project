import mongoose, { Schema } from 'mongoose';

// Projectschema
const projectSchema = new mongoose.Schema({
  //Connect logged in user to uploaded project
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bootcamp: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  week: {
    type: String,
  },
  projectImage: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Models
export const Project = mongoose.model('Project', projectSchema);