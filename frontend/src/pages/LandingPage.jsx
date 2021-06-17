import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

// Reducers, Components and Pages
import { fetchProjects } from "../reducers/allProjects";
import { MainBanner } from '../components/MainBanner'
import { ProjectCard } from '../components/ProjectCard'
import { SecondBannerLandingPage } from '../components/SecondBannerLandingPage'
// import { Login } from '../components/Login'

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LandingPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      <MainBanner />
      <ProjectCards>
        {projects.slice(0, 6).map((project) => ( 
        <ProjectCard project={project}/>
        ))}
      </ProjectCards>
      <SecondBannerLandingPage />
    </div>
  )
}
