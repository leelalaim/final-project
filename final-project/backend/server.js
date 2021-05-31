import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const mongoUrl =
  process.env.MONGO_URL || 'mongodb://localhost/bootcamp-projects';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  bootcamp: {
    type: String,
    // required: true,
  },
  projectName: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: 'Please, enter a valid email',
    },
  },
  url: {
    type: String,
  },
  stack: {
    type: String,
  },
  // hearts: {
  //   type:
  // },
  description: {
    type: String,
  },
  week: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', projectSchema);

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

//MVP
app.get('/projects', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 }).limit(10);
  res.json(projects);
});

//MVP
app.post('/upload', async (req, res) => {
  const { userName, url } = req.body;

  try {
    const newProject = await new Project({
      userName,
      url,
    }).save();
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json({ message: 'Could not save', errors: err });
  }
});

app.post('/login', (req, res) => {
  //Login Page
});

app.post('/signup', (req, res) => {
  //Sign Up Page
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
