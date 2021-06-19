import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import { upload } from './cloudinary';
import { jwtService } from './auth';
import { authenticateToken } from './auth';

const mongoUrl =
  process.env.MONGO_URL || 'mongodb://localhost/bootcamp-projects';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.Promise = Promise;

//Schemas
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address',
    ],
  },
  password: {
    type: String,
    // required: true,
  },
});

//Connect logged in user to uploaded project
const projectSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
    trim: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: 'Please, enter a valid email',
    },
  },
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
  // hearts: {
  //   type:
  // },
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
const Project = mongoose.model('Project', projectSchema);
const User = mongoose.model('User', userSchema);

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

//Paths
app.get('/', (req, res) => {
  res.send('Hello World');
});

//MVP
app.get('/projects', async (req, res) => {
  const { bootcamp, stack, week, page } = req.query;
  console.log('page');
  console.log(page);
  const pageSize = 10;

  const pageResults = (page) => {
    return (page - 1) * pageSize;
  };

  const query = {};
  if (bootcamp) {
    query.bootcamp = bootcamp;
  }

  if (stack) {
    query.stack = stack;
  }

  if (week) {
    query.week = week;
  }

  const countProjects = await Project.countDocuments();
  console.log(countProjects);

  try {
    const projects = await Project.find(query)
      .sort({ createdAt: -1 })
      .limit(10)
      .skip(pageResults(page));

    res.json({ projects, pagesTotal: Math.ceil(countProjects / pageSize) });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Oops, no luck with that filter', details: error });
  }
});

//Upload
app.post('/upload', authenticateToken, upload.single('image'), async (req, res) => {
  const { url, projectName, bootcamp, description, week, stack, github } =
    req.body;
  try {
    const newProject = new Project({
      projectName: projectName,
      url: url,
      github: github,
      bootcamp: bootcamp,
      stack: stack,
      description: description,
      week: week,
      projectImage: (req.file && req.file.path) || '',
      // projectImage: req.file.path,
    });
    newProject.save();
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json({ message: 'Could not save', errors: err });
  }
});

//Delete
app.delete('/delete/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);

    if (deletedProject) {
      res.json(deletedProject);
      res.json(Project);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error });
  }
});

//Sign Up
app.post('/signup', async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  try {
    let user = await User.findOne({
      email,
    });
    if (user) {
      res.status(403).json({
        errorCode: 'E-mail is already in use',
        message: 'A user with that e-mail already exists',
      });
      return;
    }

    user = new User({
      email,
      password: bcrypt.hashSync(password, salt),
    });
    user.save();
    res
      .status(201)
      .json({ 
        id: user._id,
        accessToken: jwtService.createAuthToken(user._id),
        email: user.email 
    });
  } catch (error) {
    res.status(400).json({
      errorCode: 'uknown-error',
      message: 'Could not create user',
      error,
    });
  }
});

// Log In
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).json({
        errorCode: 'E-mail not registered',
        message: 'Invalid credentials',
      });
      return;
    }

    if (!bcrypt.compareSync(password, user.password)) {
      res.status(401).json({
        errorCode: 'Incorrect Password',
        message: 'Invalid credentials',
      });
      return;
    }

    res.json({
      id: user._id,
      email: user.email,
      accessToken: jwtService.createAuthToken(user._id),
    });
  } catch (error) {
    res
      .status(400)
      .json({ errorCode: 'uknown-error', message: 'Invalid request', error });
  }
});

//Just for development
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
