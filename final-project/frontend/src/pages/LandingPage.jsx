import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

// Reducers, Components and Pages
import { fetchProjects } from "../reducers/allProjects";
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { SecondBannerLandingPage } from '../components/SecondBannerLandingPage'

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

export const LandingPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <ProjectCards>
        {projects.map((project) => ( 
          <ProjectCard project={project}/>
        ))}
      </ProjectCards>
      <SecondBannerLandingPage />
    </div>
  )
}
