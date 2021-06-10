import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "../components/ProjectsBanner";
// import { Footer } from "./Footer";
import { ProjectCard } from "../components/ProjectCard";


const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const ButtonCard = styled.div`
  margin-top: 100px;
`;


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const Projects = () => {
  // Value for input
  const [value, setValue] = useState([]);
  // const [filteredProjects, setFilteredProjects] = useState([])

  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const stacks = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS",
    "Redux",
    "Styled Components",
    "Python",
    "C#",
    "TypeScript",
  ];

  const filter = (e) => {
    e.preventDefault();
    console.log(value);
    dispatch(fetchProjects(value));
  };

  const addOrDeleteItem = (stack) => {
    if (value.includes(stack)) {
      setValue(value.filter((value) => value !== stack))
    } else {
      setValue(...value, stack);
    }
  }

  return (
    <>
      <ProjectsBanner />
      <form onSubmit={filter}>
        {stacks.map((stack) => (
          <div key={stack}>
            <label key={stack} label={stack}>
              {stack}
            </label>
            <input
              type="checkbox"
              checked={value.includes(stack)}
              onChange={(e) => {
                addOrDeleteItem(stack);
              }}
            />
          </div>
        ))}
        <button onClick={filter} type="submit">
          Filter!
        </button>
      </form>
      <div>All project cards here</div>
         <ProjectCards>
        {projects.map((project) => ( 
          <ProjectCard project={project}/>
        ))}
      </ProjectCards>
    </>
  );
};
