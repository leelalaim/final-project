//Outer Dependencies
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { deleteProject } from "reducers/allProjects";

// Font Awesome
import { FaTrashAlt } from "react-icons/fa";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Inner Dependencies
import "../../src/index.css";

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

//Styled Components
const FlexContainer = styled.section`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  @media (min-width: 768px) and (max-width: 1000px) {
    width: 50vw;
  }
  @media (min-width: 1001px) and (max-width: 1600px) {
    width: 30vw;
  }
  @media (min-width: 1601px) {
    width: 30vw;
  }
  @media (min-width: 2000px) {
    width: 20vw;
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
  background-color: rgba(30, 30, 30, 0.7);
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

//Component
export const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const userId = useSelector(
    (store) => store.users.user && store.users.user.id
  );

  const projectDeleteSuccess = useSelector(
    (store) => store.users.projectDeleteSuccess
  );

  if (projectDeleteSuccess) {
    toast.success("You have successfully deleted the project!");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteProject(id));
  };

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
              <DescriptionSpan>
                "
                {project.description === ""
                  ? "No description provided"
                  : project.description}
                "
              </DescriptionSpan>
            </Typography>
            <Typography gutterBottom>
              <Span>User:</Span> {project.owner.username}
            </Typography>
            <Typography gutterBottom>
              <Span>Bootcamp:</Span> {project.bootcamp}
            </Typography>
            <Typography gutterBottom>
              <Span>Stack:</Span> {project.stack}
            </Typography>
            <Typography gutterBottom>
              <Span>Week of bootcamp:</Span>
              {project.week === "" ? "N/A" : project.week}
            </Typography>
            <Typography gutterBottom>
              <Span>Live at:</Span> <a href={project.url}>{project.url}</a>
            </Typography>
            <Typography gutterBottom>
              <Span>See repository at:</Span>
              <a href={project.github}>{project.github}</a>
            </Typography>
          </DialogContent>
          <DialogActions>
            {userId === project.owner._id ? (
              <Button
                variant="contained"
                autoFocus
                onClick={(e) => {
                  handleDelete(e, project._id);
                }}
                color="primary"
              >
                <FaTrashAlt />
              </Button>
            ) : (
              ""
            )}
          </DialogActions>
        </DialogContainer>
      </CardContainer>
    </FlexContainer>
  );
};
