import React from "react";
import styled from "styled-components/macro";

import heroImage from "../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash (1).jpg";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 60vh;
  @media (min-width: 1440px) {
    height: 80vh;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  top: 27%;
  @media (min-width: 768px) {
    left: 15%;
  }
  @media (min-width: 1280px) {
    left: 27%;
  }
  @media (min-width: 1440px) {
    left: 30%;
  }
`;

const BannerHeader = styled.h1`
  font-weight: 500;
  color: #575757;
  font-size: 45px;
  margin: 0 0 10px 35px;
  letter-spacing: 2px;
  line-height: 40px;
  @media (min-width: 768px) {
    font-size: 70px;
    line-height: 65px;
  }
  @media (min-width: 1280px) {
    font-size: 90px;
    line-height: 80px;
  }
  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

const BannerParagraph = styled.p`
  font-size: 25px;
  font-weight: 300;
  line-height: 35px;
  margin: 0 0 0 35px;
  letter-spacing: 3px;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media (min-width: 1440px) {
    font-size: 60px;
    line-height: 70px;
  }
`;

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
