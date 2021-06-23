//Outer Dependecies
import React from "react";
import styled from "styled-components/macro";

//Inner Dependencies
import { TopYellowBanner } from "../components/TopYellowBanner";

// Font Awesome
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//Styled Components

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px 30px;
  @media (min-width: 768px) {
    margin: 0 7%;
  }
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

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkedInContainer = styled(IconContainer)`
  justify-content: space-between;
  width: 10%;
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

const GitHub = styled(FaGithub)`
  color: black;
  margin-left: 10px;
  font-size: 30px;
`;

const LinkedIn = styled(FaLinkedin)`
  color: black;
  font-size: 30px;
`;

//Page
export const About = () => {
  return (
    <section>
      <TopYellowBanner Bannerheader="About devGallery project" />
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
        <IconContainer>
          <Paragraph>
            If you are interested in seeing the code, have a look here
          </Paragraph>
          <a href="https://github.com/leelalaim/final-project">
            <GitHub />
          </a>
        </IconContainer>
        <Paragraph>
          Interested speaking to us regarding the project? Let's chat on
          LinkedIn!
          <LinkedInContainer>
            <Paragraph>Malin</Paragraph>
            <a href="https://www.linkedin.com/in/malin-vannesjö-57aa9051/">
              <LinkedIn />
            </a>
          </LinkedInContainer>
          <LinkedInContainer>
            <Paragraph>Hannah</Paragraph>
            <a href="https://www.linkedin.com/in/hannah-jesinkey/">
              <LinkedIn />
            </a>
          </LinkedInContainer>
          <LinkedInContainer>
            <Paragraph>Laima</Paragraph>
            <a href="https://www.linkedin.com/in/laimaduhovnaja/">
              <LinkedIn />
            </a>
          </LinkedInContainer>
        </Paragraph>
      </AboutContainer>
    </section>
  );
};
