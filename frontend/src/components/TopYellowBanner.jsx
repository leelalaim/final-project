//Outer Dependencies
import React from "react";
import styled from "styled-components/macro";

//Inner Dependencies
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
  margin-bottom: 25px;
  @media (min-width: 767px) {
    height: 45vh;
  }
  @media (min-width: 1280px) and (max-width: 1440px) {
    height: 55vh;
  }
  @media (min-width: 1440px) {
    height: 55vh;
  }
  @media (min-width: 2000px) {
    height: 45vh;
  }
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
    top: 30%;
    font-size: 50px;
    padding: 20px;
  }
  @media (min-width: 1280px) {
    top: 40%;
    font-size: 70px;
    padding: 20px;
  }
`;

const BannerParagraph = styled.p`
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  position: absolute;
  left: 30px;
  top: 62%;
  line-height: 25px;
  width: 190px;
  @media (min-width: 375px) and (max-width: 767px) {
    top: 64%;
    font-size: 28px;
    line-height: 29px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    top: 55%;
    font-size: 45px;
    line-height: 50px;
  }
  @media (min-width: 1280px) {
    top: 64%;
    font-size: 45px;
    line-height: 50px;
  }
  @media (min-width: 2000px) {
    font-size: 60px;
  }
`;

//Component
export const TopYellowBanner = ( {Bannerheader, Bannerparagraph }) => {
  return (
    <BannerContainer>
      <BannerImage src={projectsimage}></BannerImage>
      <BannerHeader>{Bannerheader}</BannerHeader>
      <BannerParagraph>{Bannerparagraph}</BannerParagraph>
    </BannerContainer>
  );
};