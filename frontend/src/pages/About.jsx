import React from "react";
import styled from "styled-components/macro";
import { AboutBanner } from "../components/AboutBanner";

const Container = styled.section`
  height: 95vh;
`;

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px;
`;

const Header = styled.h1`
  font-size: 19px;
  margin: 20px 0 0;
  @media (min-width: 375px) {
    font-size: 25px;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 300;
  @media (min-width: 375px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

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
      </AboutContainer>
    </Container>
  );
};
