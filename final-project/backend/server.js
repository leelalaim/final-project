import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';
import dotenv from 'dotenv';
import cloudinaryFramework from 'cloudinary';
import multer from 'multer';
import cloudinaryStorage from 'multer-storage-cloudinary';

dotenv.config();
const cloudinary = cloudinaryFramework.v2;
cloudinary.config({
  cloud_name: 'mmolliss',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'projectImage',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

const parser = multer({ storage });

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
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
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
  const { bootcamp, stack, week } = req.query;

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

  try {
    const data = await Project.find(query).sort({ createdAt: -1 }).limit(10);

    res.json(data);
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Oops, no luck with that filter', details: error });
  }
});

//MVP
app.post('/upload', parser.single('image'), async (req, res) => {
  const { url, projectName, bootcamp, description, week, stack } = req.body;
  try {
    const newProject = new Project({
      projectName: projectName,
      url: url,
      bootcamp: bootcamp,
      stack: stack,
      description: description,
      week: week,
      projectImage: (req.file && req.file.path) || '',
    });
    newProject.save();
    res.status(200).json(newProject);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Could not save', errors: err });
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
      .json({ id: user._id, accessToken: user.accessToken, email: user.email });
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
      password: user.password,
      accessToken: user.accessToken,
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
