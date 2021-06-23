//Outer Dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

//Inner Dependencies
import { fetchProjects } from "../reducers/allProjects";
import { ProjectCard } from "../components/ProjectCard";
import { FilterForm } from "../components/FilterForm";
import { ProjectsSecondBanner } from "../components/ProjectsSecondBanner";
import { TopYellowBanner } from "../components/TopYellowBanner"

//Material-UI
import Pagination from "@material-ui/lab/Pagination";

//Styled Components
const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

//Page
export const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);
  const pageTotal = useSelector((store) => store.allProjects.totalPages);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const onFilterFormSubmit = (filters) => {
    dispatch(fetchProjects(filters));
  };

  const onPageChange = (event, page) => {
    setPageNumber(page);
    dispatch(fetchProjects({}, page));
  };

  return (
    <>
      <TopYellowBanner 
        Bannerheader='Creativity starts here...'
        Bannerparagraph='Bootcamp projects that are worth seeing.'
    />
      <FilterForm
        onSubmit={(filters) => onFilterFormSubmit(filters)}
      ></FilterForm>
      <ProjectCards>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ProjectCards>
      <PaginationContainer>
        <Pagination
          count={pageTotal}
          page={pageNumber}
          onChange={onPageChange}
        />
      </PaginationContainer>
      <ProjectsSecondBanner />
    </>
  );
};
