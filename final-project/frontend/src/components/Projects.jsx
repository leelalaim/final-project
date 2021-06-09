import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "./ProjectsBanner";
import { Footer } from "./Footer";
import { Card } from "./Card";


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const ButtonCard = styled.div`
margin-top: 100px;
`

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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

const ProjectCards = styled.div`
  display: flex;
`

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
  
    const [open, setOpen] = React.useState(false);
 
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
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
                value={stack}
                onChange={(e) => {
                  setValue(...value,e.target.value)
                }}
              />
            </div>
          ))}
          <button onClick={filter} type="submit">
            Filter!
          </button>
        </form>
        <div>All project cards here</div>
        <ProjectCards >
        {projects.map((project) => (
          <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <h3>{project.projectName}</h3>
          </Button>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {project.projectName}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              {project.bootcamp}
            </Typography>
            <Typography gutterBottom>
              {project.stack}
            </Typography>
          </DialogContent>
          <DialogActions>
            {/* <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button> */}
          </DialogActions>
        </Dialog>
        </>
        ))}
        </ProjectCards>
      </>
    );
  }