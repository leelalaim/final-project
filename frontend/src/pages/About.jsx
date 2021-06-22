//Outer Dependecies
import React from "react";
import styled from "styled-components/macro";

//Inner Dependencies
import { AboutBanner } from "../components/AboutBanner";

//Styled Components
const Container = styled.section`
  @media (min-width: 767px) {
    height: 100vh;
  }
`;

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px 30px;
  @media (min-width: 1280px) {
    width: 60vw;
    margin: 0 auto;
  }
`;

const Header = styled.h1`
  font-size: 19px;
  margin: 30px 0 0;
  @media (min-width: 375px) {
    font-size: 25px;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 300;
  @media (min-width: 375px) and (max-width: 1279px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media (min-width: 1280px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

//Page
export const About = () => {
  return (
    <Container>
      <AboutBanner />
      <AboutContainer>
        <Header>Our story</Header>
        <Paragraph>
          This page was the product of the Final Project in the Technigo
          Frontend Bootcamp. We, Laima Duhovnaja, Malin Vannesjö and Hannah
          Jesinkey, created this page to be able to share the projects that were
          created during the Bootcamp. The idea extended to include projects
          from other Bootcamps as we wanted students from all over to be able to
          take part in the platform. Now you can view projects from other
          students as well as upload your own and share them with the world!
        </Paragraph>
        <Paragraph>
          If you are interested in seeing the code have a look here{" "}
        </Paragraph>
      </AboutContainer>
    </Container>
  );
};
