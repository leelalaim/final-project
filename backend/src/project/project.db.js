import mongoose, { Schema } from 'mongoose';

// Projectschema
const projectSchema = new mongoose.Schema({
  //Connect logged in user to uploaded project
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bootcamp: {
    type: String,
  },
  projectName: {
    type: String,
  },
  url: {
    type: String,
  },
  github: {
    type: String,
  },
  stack: {
    type: String,
  },
  description: {
    type: String,
  },
  week: {
    type: String,
  },
  projectImage: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Models
export const Project = mongoose.model('Project', projectSchema);