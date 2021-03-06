import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';
import { upload } from './src/cloudinary';
import { jwtService } from './src/auth';
import { authenticateToken } from './src/auth';
import { Project, isProjectOwner } from './src/project';
import { User } from './src/user';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/bootcamp-projects';
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// Paths
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Projects
app.get('/projects', async (req, res) => {
  const { bootcamp, stack, week, page } = req.query; 
  //Page size 9 to match the frontend styling
  const pageSize = 9;

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

  try {
    const projects = await Project.find(query)
      .populate('owner', '-password')
      .sort({ createdAt: -1 })
      .limit(9)
      .skip(pageResults(page));
    
    const countProjects = await Project.countDocuments(query);

    res.json({ projects, pagesTotal: Math.ceil(countProjects / pageSize) });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: 'Oops, no luck with that filter', details: error });
  }
});

// Upload
app.post('/projects', authenticateToken, upload.single('image'), async (req, res) => {
  const { url, projectName, bootcamp, description, week, stack, github } = req.body;

  try {
    const newProject = new Project({
      //attaching the owner of the project to the project so only they can delete
      owner: req.user.id,
      projectName: projectName,
      url: url,
      github: github,
      bootcamp: bootcamp,
      stack: stack,
      description: description,
      week: week,
      projectImage: (req.file && req.file.path) || '',
    });
    await newProject.save();
    res.status(200).json(newProject);
  } catch (err) {
    console.log(error);
    res.status(400).json({ message: 'Could not save', errors: err });
  }
});

// Delete
app.delete('/projects/:id', authenticateToken, isProjectOwner, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);

    if (deletedProject) {
      res.json(deletedProject);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Invalid request', error });
  }
});

//Sign Up
app.post('/signup', async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const { email, password, username } = req.body;

  try {
    let user = await User.findOne(
      { $or: [{ email }, { username }] }
    );

    if (user) {
      res.status(403).json({
        errorCode: 'invalid-credentials',
        message: 'E-mail or username is already in use',
      });
      return;
    }

    user = new User({
      email,
      password: bcrypt.hashSync(password, salt),
      username
    });
    await user.save();
    res
      .status(201)
      .json({ 
        id: user._id,
        username: user.username,
        accessToken: jwtService.createAuthToken(user._id),
        email: user.email 
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      errorCode: 'uknown-error',
      message: 'Could not create user',
    });
  }
});

// Log In
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
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
    console.log(error);
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
