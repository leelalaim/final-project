//Outer Dependencies
import React from "react";
import styled from "styled-components/macro";

//Inner Dependencies
import heroImage from "../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash (1).jpg";

//Styled Components
const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 60vh;
  @media (min-width: 768px) {
    min-height: 600px;
    height: 70vh;
    object-position: 50% 80%;
  }
  @media (min-width: 1024px) {
    min-height: 600px;
    object-position: 50% 80%;
  }

  @media (min-width: 1280px) {
    min-height: 600px;
    height: 70vh;
    object-position: 50% 80%;
  }
  @media (min-width: 1440px) {
    min-height: 600px;
    height: 70vh;
    object-position: 50% 80%;
  }
  @media (min-width: 1600px) {
    height: 70vh;
    object-position: 50% 80%;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  top: 27%;
  left: 10%;
  @media (min-width: 768px) {
    left: 20%;
    top: 17%;
  }
  @media (min-width: 1280px) {
    left: 30%;
  }
  @media (min-width: 1440px) {
    left: 30%;
    top: 15%;
  }
`;

const BannerHeader = styled.h1`
  font-weight: 500;
  color: #575757;
  letter-spacing: 2px;
  font-size: 33px;
  line-height: 31px;
  margin-bottom: 15px;
  @media (min-width: 375px) {
    font-size: 45px;
    line-height: 40px;
  }
  @media (min-width: 768px) {
    font-size: 70px;
    line-height: 65px;
  }
  @media (min-width: 1280px) {
    font-size: 90px;
    line-height: 80px;
  }
  @media (min-width: 1440px) {
    font-size: 90px;
    line-height: 90px;
  }
  @media (min-width: 1600px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

const BannerParagraph = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 3px;
  color: #2a3842;
  @media (min-width: 375px) {
    font-size: 25px;
    font-weight: 300;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (min-width: 1600px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

//Component
export const MainBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={heroImage}></BannerImage>
      <TextContainer>
        <BannerHeader>
          Bootcamp <br /> projects
        </BannerHeader>
        <BannerParagraph>by amazing people</BannerParagraph>
      </TextContainer>
    </BannerContainer>
  );
};
