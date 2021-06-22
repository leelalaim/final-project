// Outer Dependencies
import React from "react";
import styled from "styled-components/macro";

// Inner Dependencies
import projectsimage from "../assets/projects2 (1).jpg";

//Styled Components
const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 60vh;
`;

const BannerHeader = styled.h1`
  margin: 0;
  padding: 10px 0px 10px 30px;
  position: absolute;
  font-weight: 400;
  top: 30%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 33px;
  width: 90%;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 43px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    top: 40%;
    font-size: 50px;
    padding: 20px;
  }
  @media (min-width: 1280px) {
    top: 40%;
    font-size: 70px;
    padding: 20px;
  }
`;

//Component
export const AboutBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={projectsimage}></BannerImage>
      <BannerHeader>About devGallery project</BannerHeader>
    </BannerContainer>
  );
};
