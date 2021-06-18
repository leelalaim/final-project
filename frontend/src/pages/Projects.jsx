import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "../components/ProjectsBanner";
import { ProjectCard } from "../components/ProjectCard";
import { FilterForm } from "../components/FilterForm";
import { ProjectsSecondBanner } from "../components/ProjectsSecondBanner";

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const onFilterFormSubmit = (filters) => {
    dispatch(fetchProjects(filters));
  };

  return (
    <>
      <ProjectsBanner />
      <FilterForm
        onSubmit={(filters) => onFilterFormSubmit(filters)}
      ></FilterForm>
      <ProjectCards>
        {projects.map((project) => (
          <ProjectCard key= {project._id} project={project} />
        ))}
      </ProjectCards>
      <ProjectsSecondBanner />
    </>
  );
};
