import React from "react";
import styled from "styled-components/macro";

import projectsimage from "../assets/projects2.jpg";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 50vh;
`;

const BannerHeader = styled.h1`
  margin: 0;
  padding: 10px 0px 10px 30px;
  position: absolute;
  font-weight: 400;
  top: 35%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 35px;
  @media (min-width: 375px) and (max-width: 767px) {
    top: 40%;
    font-size: 40px;
    padding: 10px 10px 10px 30px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    top: 40%;
    font-size: 60px;
    padding: 10px 10px 10px 30px;
  }
  @media (min-width: 1280px) {
    top: 45%;
    font-size: 60px;
    padding: 10px 10px 10px 30px;
  }
`;

const BannerParagraph = styled.p`
  font-size: 25px;
  font-weight: 300;
  margin: 0;
  position: absolute;
  left: 30px;
  top: 70%;
  line-height: 35px;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 25px;
    top: 70%;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 35px;
    top: 65%;
  }
  @media (min-width: 1280px) {
    font-size: 35px;
    top: 70%;
  }
`;

export const ProjectsBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={projectsimage}></BannerImage>
      <BannerHeader>Creativity starts here...</BannerHeader>
      <BannerParagraph>
        Bootcamp projects worth seeing.
      </BannerParagraph>
    </BannerContainer>
  );
};