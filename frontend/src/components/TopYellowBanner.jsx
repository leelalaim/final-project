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
  width: 100vw;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 60vh;
  margin-bottom: 25px;
  @media (min-width: 767px) {
    height: 50vh;
  }
  @media (min-width: 1280px) {
    height: 65vh;
  }
  @media (min-width: 1400px) {
    height: 70vh;
  }
`;

const BannerHeader = styled.h1`
  margin: 0 0 10px 0px;
  padding: 3% 0 5% 10%;
  font-weight: 400;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 33px;
  width: 90%;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 43px;
    padding: 3% 0 5% 6%;
    width: 94%;
  }
  @media (min-width: 768px) {
    font-size: 50px;
    padding: 2% 22% 2% 6%;
    width: 70%;
  }
  @media (min-width: 1280px) {
    font-size: 60px;
    padding: 2% 22% 2% 6%;
    width: 70%;
  }
`;

const BannerParagraph = styled.p`
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  padding-left: 10%;
  line-height: 25px;
  width: 190px;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 28px;
    line-height: 32px;
    width: 250px;
    padding-left: 6%;
  }
  @media (min-width: 768px) {
    font-size: 37px;
    line-height: 46px;
    width: 400px;
    padding-left: 6%;
  }
  @media (min-width: 1280px) {
    margin-top: 40px;
    font-size: 40px;
    line-height: 46px;
    padding-left: 6%;
  }
`;

//Component
export const TopYellowBanner = ({ Bannerheader, Bannerparagraph }) => {
  return (
    <BannerContainer>
      <BannerImage src={projectsimage}></BannerImage>
      <TextWrapper>
        <BannerHeader>{Bannerheader}</BannerHeader>
        <BannerParagraph>{Bannerparagraph}</BannerParagraph>
      </TextWrapper>
    </BannerContainer>
  );
};
