import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost/bootcamp-projects";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const projectSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  bootcamp: {
    type: String,
    required: true
  },
  projectName: {
    type: String
  },
  email: {
    type: String,
    unique: [true, "Email taken"],
    trim: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
    message: "Please, enter a valid email",
  },
},
  url: {
    type: String,
  },
  stack: {
    type: String
  },
  // hearts: {
  //   type: 
  // },
  description: {
    type: String
  },
  week: {
    type: String
  }
})

const Project = mongoose.model("Project", projectSchema)

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  //Landing page
});

//MVP 
app.get("/projects", (req, res) => {
  //Landing page / project filtering

  //Display all the projects
  //Filter the projects - start to do that in the frontend, if possible to add it to the backend. 

});

//MVP 
app.post("/upload", (req, res) => {
  //Upload Page
});

app.post("/login", (req, res) => {
  //Login Page
});

app.post("/signup", (req, res) => {
  //Sign Up Page
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
