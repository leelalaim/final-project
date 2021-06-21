import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// Reducers, Components and Pages
import { fetchProjects } from "../reducers/allProjects";
import { MainBanner } from '../components/MainBanner'
import { ProjectCard } from '../components/ProjectCard'
import { SecondBannerLandingPage } from '../components/SecondBannerLandingPage'

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SeeMoreContainer = styled.div`
  text-align: right;
  margin-bottom: 30px;
`;

const SeeMore = styled(Link)`
  color: black;
  margin-right: 70px;
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
      <SeeMoreContainer>
        <SeeMore to="/projects" >See more..</SeeMore>
      </SeeMoreContainer>
      <SecondBannerLandingPage />
    </div>
  )
}
