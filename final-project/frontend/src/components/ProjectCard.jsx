import React from "react";
import styled from "styled-components/macro";

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

const FlexContainer = styled.section`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 50vw;
  }
  @media (min-width: 1280px) {
    width: 25vw;
  }
`;

const PopUpButton = styled(Button)`
  width: 80%;
  margin: 20px 0;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  position: relative;
`;

const ButtonImage = styled.img`
  // width: 100%;
  // max-width: 100%;
  height: 200px;
  padding: 0;
  object-fit: cover;
`;

const DialogContainer = styled(Dialog)`
  width: 100%;
  // padding: 10%;
  // margin: 20px 0;
`;

const ProjectName = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: 0;
  background-color: rgba(30, 30, 30, 0.5);
  color: white;
  margin: 0;
  padding: 10px;
  text-align: left;
`;

const Image = styled.img`
  max-width: 100%;
  padding-bottom: 9px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Dots = styled.hr`
  border-style: none;
  border-top-style: dotted;
  border-color: #e8c727;
  border-width: 10px;
  width: 15%;
`;

const Span = styled.span`
  font-weight: 600;
`;
const DescriptionSpan = styled.span`
  font-style: italic;
`;

// const InfoContainer = styled(DialogContent)`
//   border-top: #f5c81e;
//   border-bottom: #f5c81e;
// `;

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
    <FlexContainer>
      <CardContainer>
        <PopUpButton
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
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
            <Image src={project.projectImage} alt="Project" />
            <Dots />
            <Typography gutterBottom>
              <DescriptionSpan>"{project.description}"</DescriptionSpan>
            </Typography>
            <Typography gutterBottom>
              <Span>Bootcamp:</Span> {project.bootcamp}
            </Typography>
            <Typography gutterBottom>
              <Span>Stack:</Span> {project.stack}
            </Typography>
            <Typography gutterBottom>
              <Span>Week of bootcamp:</Span> {project.week}
            </Typography>
            <Typography gutterBottom>
              <Span>Live at:</Span> <a href={project.url}>{project.url}</a>
            </Typography>
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
    </FlexContainer>
  );
};
