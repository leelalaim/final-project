//Outer Dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

//Inner Dependencies
import { fetchProjects } from "../reducers/allProjects";
import { MainBanner } from "../components/MainBanner";
import { ProjectCard } from "../components/ProjectCard";
import { SecondBannerLandingPage } from "../components/SecondBannerLandingPage";
import { Loading } from "../components/Loading";

//Styled Components
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

//Page
export const LandingPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    <div>
      <MainBanner />
      {isLoading && <Loading />}
      {!isLoading &&
      <ProjectCards>
        {projects.slice(0, 6).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCards>
      }
      <SeeMoreContainer>
        <SeeMore to="/projects">See more..</SeeMore>
      </SeeMoreContainer>
      <SecondBannerLandingPage />
    </div>
  );
};
