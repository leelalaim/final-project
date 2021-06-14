import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

// Reducers, Components and Pages
import { fetchProjects } from "../reducers/allProjects";
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { SecondBannerLandingPage } from '../components/SecondBannerLandingPage'

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
      <Hero />
      <ProjectCards>
        {projects.slice(0, 6).map((project) => ( 
        <ProjectCard project={project}/>
        ))}
      </ProjectCards>
      <SecondBannerLandingPage />
    </div>
  )
}
