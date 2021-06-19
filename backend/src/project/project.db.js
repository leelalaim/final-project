import mongoose from 'mongoose';

//Connect logged in user to uploaded project
const projectSchema = new mongoose.Schema({
  ownerId: {
    type: String,
    required: true,
  },
  // email: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   // required: true,
  //   trim: true,
  //   validate: {
  //     validator: (value) => {
  //       return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  //     },
  //     message: 'Please, enter a valid email',
  //   },
  // },
  bootcamp: {
    type: String,
    // required: true,
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