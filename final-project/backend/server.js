import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';

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
  userName: {
    type: String,
    required: true,
  },
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
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
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

app.post('/signup', async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const { userName, email, password } = req.body;
  try {
    let user = await User.findOne({
      userName,
    });
    if (user) {
      res.status(403).json({
        errorCode: 'User Name exists',
        message: 'A user with that User Name already exists',
      });
      return;
    }

    user = new User({
      userName,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    console.log(user);
    user.save();
    res.status(201).json({ id: user._id, accessToken: user.accessToken });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      errorCode: 'uknown-error',
      message: 'Could not create user',
      error,
    });
  }
});

//Just for development
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/login', async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });
    if (!user) {
      res.status(401).json({
        errorCode: 'invalid-credentials',
        message: 'Invalid credentials',
      });
      return;
    }

    if (!bcrypt.compareSync(password, user.password)) {
      res.status(401).json({
        errorCode: 'invalid-credentials',
        message: 'Invalid credentials',
      });
      return;
    }

    res.json({
      id: user._id,
      email: user.email,
      accessToken: user.accessToken,
    });
  } catch (error) {
    res
      .status(400)
      .json({ errorCode: 'uknown-error', message: 'Invalid request', error });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
