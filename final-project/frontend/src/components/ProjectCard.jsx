import React from "react";
import styled from "styled-components";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { fetchDelete } from "reducers/allProjects";

import "../../src/index.css";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const PopUpButton = styled(Button)`
  width: 80%;
  margin: 20px 0;
  border: 1px solid red;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  padding: 0;
  position: relative;
`;

const ButtonImage = styled.img`
  // width: 100%;
  // max-width: 100%;
height: 200px;
  padding: 0;
  border: 1px solid black;
  object-fit: cover;
`;

const DialogContainer = styled(Dialog)`
  width: 80%;
  padding: 10%;
  margin: 20px 0;
`;

const ProjectName = styled.h3`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  margin: 0;
  padding: 10px;
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

export const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const handleDelete =() =>{
  //   dispatch(fetchDelete(id))
  // }

  return (
    <CardContainer>
      <PopUpButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <ButtonContainer>
          <ButtonImage src={project.projectImage} alt="Project" />
          <ProjectName>{project.projectName}</ProjectName>
        </ButtonContainer>
      </PopUpButton>
      <DialogContainer
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {project.projectName}
        </DialogTitle>
        <DialogContent dividers>
          <img src={project.projectImage} alt="Project" />
          <Typography gutterBottom>{project.bootcamp}</Typography>
          <Typography gutterBottom>{project.stack}</Typography>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button> */}
          {/* <button onClick = {handleDelete}>
             Delete
           </button> */}
        </DialogActions>
      </DialogContainer>
    </CardContainer>
  );
};
